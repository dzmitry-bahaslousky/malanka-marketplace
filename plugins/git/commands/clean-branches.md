---
name: clean-branches
description: Delete merged branches with interactive selection and safety checks
allowed-tools:
  - Bash
  - AskUserQuestion
---

# Git Clean Branches Command

You are helping the user clean up merged git branches that are no longer needed. This command provides a safe, interactive way to delete local branches that have been merged into the default branch.

## Workflow

Follow these steps in order:

### 1. Validate Git Repository

Run `git status` to check if we're in a Git repository.

- If error (not a git repo): Show the git error and stop
- If successful: Continue to step 2

### 2. Determine Default Branch

Find the default branch (main or master):

```bash
git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's@^refs/remotes/origin/@@'
```

If that fails (no remote or HEAD not set), try to detect which branch exists:

```bash
git rev-parse --verify main 2>/dev/null && echo "main" || (git rev-parse --verify master 2>/dev/null && echo "master")
```

If neither main nor master exists, inform the user they need to specify a default branch and stop.

Store the default branch name for later use.

### 3. Get Current Branch

Run `git branch --show-current` to get the current branch.

This branch will be protected from deletion.

### 4. Find Merged Branches

Get all local branches that have been merged into the default branch:

```bash
git branch --merged <default-branch> --format="%(refname:short)"
```

**Filter out protected branches**:
- Remove: `main`, `master`, `develop`
- Remove: The current branch from step 3
- Remove: The default branch from step 2

If no branches remain after filtering:
- Inform user: "No merged branches found that can be safely deleted. All your branches are either unmerged or protected (main/master/develop/current)."
- Stop

### 5. Check for Worktrees

For each remaining branch, check if it has an associated worktree:

```bash
git worktree list --porcelain
```

This outputs information about all worktrees. Look for lines starting with `branch refs/heads/<branch-name>` to identify which branches have worktrees.

**Store two separate lists**:
1. **Branches without worktrees**: Can be deleted normally
2. **Branches with worktrees**: Need worktree removal first

If all branches have worktrees:
- Continue to step 6, but add a note that worktrees must be removed first

### 6. Get Branch Details

For each remaining branch, get additional details to help user make decisions:

**Last commit date** (relative format):
```bash
git log -1 --format="%ar" <branch-name>
```

**Last commit message** (truncated to ~50 chars):
```bash
git log -1 --format="%s" <branch-name> | cut -c1-50
```

**Combine into a formatted description** for each branch:

For branches **without worktrees**:
```
<branch-name> (merged <relative-date> - "<commit-message>")
```

For branches **with worktrees**:
```
<branch-name> (merged <relative-date> - "<commit-message>") [has worktree]
```

Example: `feature/old-login (merged 2 weeks ago - "Update login flow")`
Example with worktree: `feature/experiment (merged 3 days ago - "Test changes") [has worktree]`

### 7. Present Interactive Selection

Use AskUserQuestion to present the list of branches with multiSelect enabled.

**Question format**:

If there are branches with worktrees:
```
Found <N> merged branches. Note: Branches with worktrees must have their worktrees removed before deletion.

Select which branches to delete (or select "Cancel" to exit):
```

If no branches have worktrees:
```
Found <N> merged branches that can be safely deleted:

Select which branches to delete (or select "Cancel" to exit):
```

**Header**: "Branches"

**Options**:
- Create one option for each branch with:
  - **label**: Branch name (e.g., "feature/old-login")
  - **description**: Full details from step 6 (e.g., "merged 2 weeks ago - 'Update login flow'" or "merged 3 days ago - 'Test changes' [has worktree]")
- Options should be ordered by:
  1. Branches without worktrees first (most recently merged first)
  2. Then branches with worktrees (most recently merged first)

**multiSelect**: true (allows selecting multiple branches)

**Important**: Users can also select "Other" to cancel - treat this as cancellation.

### 8. Handle User Response

**If user cancels or selects "Other"**:
- Inform user: "Branch cleanup cancelled. No branches were deleted."
- Stop

**If user selects one or more branches**:
- Parse the selected branch names from the response
- Separate them into two groups:
  1. Branches without worktrees
  2. Branches with worktrees
- Continue to step 9

### 9. Confirm Deletion

Before deleting, show a final confirmation using AskUserQuestion.

**Question format**:

If there are branches with worktrees in the selection:
```
You are about to delete <N> branches:

Branches without worktrees (<X> branches):
<list each branch name>

Branches with worktrees (<Y> branches - worktrees will be removed first):
<list each branch name>

This action cannot be undone. Are you sure?
```

If no branches have worktrees:
```
You are about to delete <N> branches:

<list each branch name>

This action cannot be undone. Are you sure?
```

**Header**: "Confirm"

**Options**:
1. **Delete branches** - Proceed with deletion
2. **Cancel** - Don't delete anything

**multiSelect**: false

### 10. Delete Branches

**If "Cancel"**:
- Inform user: "Deletion cancelled. No branches were deleted."
- Stop

**If "Delete branches"**:

**First, handle branches with worktrees:**

For each branch with a worktree:
1. Get the worktree path:
   ```bash
   git worktree list --porcelain | grep -A2 "branch refs/heads/<branch-name>" | grep "worktree" | cut -d' ' -f2
   ```

2. Remove the worktree:
   ```bash
   git worktree remove <worktree-path>
   ```

   If this fails (e.g., worktree has uncommitted changes), show the error and skip this branch deletion.

3. If worktree removal succeeds, delete the branch:
   ```bash
   git branch -d <branch-name>
   ```

**Then, handle branches without worktrees:**

For each branch without a worktree, execute:
```bash
git branch -d <branch-name>
```

Note: Use `-d` (not `-D`) for safety - this will prevent deletion if branch isn't fully merged

**Track results**:
- Successful worktree removals
- Failed worktree removals with error message
- Successful branch deletions (exit code 0)
- Failed branch deletions (exit code non-zero) with error message

### 11. Report Results

Show a summary of the operation:

**If all succeeded (including worktree removals)**:
```
✓ Successfully deleted <N> branches:
  - <branch-1>
  - <branch-2>
  - <branch-3>

<If any had worktrees, add:>
✓ Removed <M> worktrees before deletion

Your repository is now cleaner!
```

**If some failed**:
```
Deletion Results:

✓ Successfully deleted (<N> branches):
  - <branch-1>
  - <branch-2>

<If any worktrees were removed:>
✓ Removed worktrees:
  - <branch-with-worktree-1>

✗ Failed to delete (<M> branches):
  - <branch-3>: <error message>
  - <branch-4>: <error message>

<If any worktree removals failed:>
✗ Failed to remove worktrees:
  - <branch-5>: <error message> (branch not deleted)

Tip: Failed deletions are usually caused by:
  - Unmerged commits (use 'git branch -D' to force delete if needed)
  - Uncommitted changes in worktree (commit or discard changes, then remove worktree)
```

**If all failed**:
```
✗ Failed to delete any branches:
  - <branch-1>: <error message>
  - <branch-2>: <error message>

Please check the error messages above and try again.
```

## Important Notes

- **Always use `-d` flag** (lowercase) when deleting - this provides safety by preventing deletion of unmerged branches
- **Never delete protected branches**: main, master, develop, current branch
- **Never skip confirmation** - user must explicitly confirm deletion
- **Handle errors gracefully** - if git commands fail, show the error and guide the user
- **Preserve branch information** - show enough context (date, commit message) for users to make informed decisions

## Edge Cases

### No Remote HEAD Set

If `git symbolic-ref refs/remotes/origin/HEAD` fails:
- Try to detect main or master locally
- If both fail, inform user and suggest: `git remote set-head origin --auto`

### No Merged Branches

If no branches are merged or all merged branches are protected:
- Inform user clearly
- Suggest they may need to merge feature branches or there's nothing to clean up

### Git Command Failures

If any git command fails unexpectedly:
- Show the full error output from git
- Stop execution and ask user to resolve the issue
- Don't attempt to continue with partial data

### Branch Deletion Fails

The `-d` flag will fail if:
- Branch has unmerged commits (safety feature)
- Branch is checked out in another worktree (should be caught in step 5)
- Permission issues

Show the exact git error message to help user diagnose.

### Worktree Removal Fails

The `git worktree remove` command will fail if:
- Worktree has uncommitted changes
- Worktree has untracked files and `--force` is not used
- Worktree path doesn't exist or is inaccessible

When worktree removal fails:
- Show the git error message
- Skip deleting that branch
- Continue with other branches
- In the final report, explain that the user needs to handle the worktree manually

**User guidance for failed worktree removal**:
```
To manually handle worktrees:
1. Check worktree status: git worktree list
2. Navigate to worktree: cd <worktree-path>
3. Commit or discard changes
4. Remove worktree: git worktree remove <path>
5. Delete branch: git branch -d <branch-name>
```

## Examples

### Example 1: Successful cleanup

```
User: /clean-branches

Steps:
1. Validate git repo ✓
2. Find default branch: "main" ✓
3. Get current branch: "feature/new-feature" ✓
4. Find merged branches: 4 found
5. Get details for each branch ✓
6. Show selection UI with 4 options
7. User selects 3 branches
8. Show confirmation
9. User confirms
10. Delete 3 branches successfully ✓
```

### Example 2: No branches to clean

```
User: /clean-branches

Steps:
1. Validate git repo ✓
2. Find default branch: "main" ✓
3. Get current branch: "main" ✓
4. Find merged branches: Only "main" found
5. After filtering: 0 branches
6. Inform: "No merged branches found that can be safely deleted."
7. Stop
```

### Example 3: User cancels

```
User: /clean-branches

Steps:
1-6. (same as Example 1)
7. User selects "Cancel"
8. Inform: "Branch cleanup cancelled."
9. Stop
```

### Example 4: Partial success

```
User: /clean-branches

Steps:
1-9. (same as Example 1)
10. Delete branches:
    - feature/old-1: Success ✓
    - feature/old-2: Success ✓
    - feature/old-3: Failed (has unmerged commits)
11. Report results showing 2 successes, 1 failure
```

### Example 5: Branches with worktrees

```
User: /clean-branches

Steps:
1. Validate git repo ✓
2. Find default branch: "main" ✓
3. Get current branch: "main" ✓
4. Find merged branches: 5 found
5. Check for worktrees: 2 branches have worktrees
6. Get details for each branch ✓
7. Show selection UI with 5 options (2 marked with [has worktree])
8. User selects 4 branches (including 1 with worktree)
9. Show confirmation mentioning worktree removal
10. User confirms
11. Delete branches:
    - feature/with-worktree: Remove worktree ✓, delete branch ✓
    - feature/old-1: Success ✓
    - feature/old-2: Success ✓
    - feature/old-3: Success ✓
12. Report: 4 branches deleted, 1 worktree removed
```

### Example 6: Worktree removal fails

```
User: /clean-branches

Steps:
1-10. (same as Example 5)
11. Delete branches:
    - feature/with-worktree: Remove worktree fails (uncommitted changes)
    - feature/old-1: Success ✓
    - feature/old-2: Success ✓
12. Report: 2 successes, 1 worktree removal failure with guidance
```

## Safety Features

✅ **Protected branches**: Never shows main, master, develop, or current branch for deletion
✅ **Merged-only**: Only shows branches fully merged into default branch
✅ **Worktree detection**: Automatically detects and handles branches with associated worktrees
✅ **Worktree cleanup**: Removes worktrees before deleting branches (with proper error handling)
✅ **Interactive selection**: User explicitly chooses which branches to delete
✅ **Double confirmation**: Separate selection and confirmation steps
✅ **Safe delete flag**: Uses `-d` to prevent accidental deletion of unmerged branches
✅ **Clear feedback**: Shows what will be deleted before doing it
✅ **Detailed results**: Reports success/failure for each branch and worktree operation

## Tips for Users

- Run this command periodically to keep your repository clean
- Merged branches are safe to delete - the commits are preserved in the main branch
- If a branch fails to delete with `-d`, verify it's truly merged before using `-D` to force
- Use `git branch -a` to see all branches including remote ones
- This command only deletes local branches - remote branches remain untouched
- **Worktree branches**: Branches with `+` prefix in `git branch -v` have worktrees
- If worktree removal fails, commit or discard changes in the worktree first
- Use `git worktree list` to see all active worktrees and their locations
