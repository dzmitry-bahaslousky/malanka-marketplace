---
name: summarize-course
description: Summarize raw text from a video course (transcript, subtitles, or lesson notes) on ANY subject — technical, humanities, language-learning, cooking, business, philosophy, art, science, anything — into a clean, structured Markdown summary. Triggers when the user runs /learn:summarize-course, pastes a course transcript and asks for a summary, or says "summarize this lesson", "turn this transcript into notes", "make course notes from this". Produces sections for Overview, Key Concepts, Examples & Demos, Takeaways, and Action Items. Output is printed to the console — no files are written.
argument-hint: "<paste the video transcript / subtitles / notes here>"
allowed-tools: []
version: 0.1.0
---

# Video Course Summarizer

This skill is domain-agnostic. It works for courses on **any** subject — programming, cooking, history, a language, music theory, philosophy, design, finance, photography, medicine, carpentry. Do not assume technical content. Do not force programming terminology into summaries of non-technical courses. Match your vocabulary and examples to the domain the transcript is actually about.

## Think Before Summarizing

Don't assume. Don't invent. Surface what's missing.

Before producing output:

- **Check for transcript content.** If no substantive text was pasted (just a short sentence, a URL, or nothing), do NOT generate a summary. Ask the user to paste the transcript.
- **Don't invent concepts the instructor didn't teach.** Summarize what's actually in the text. If the transcript is fragmentary (cut off, machine-transcribed with errors, lots of filler), say so in Overview rather than filling gaps with plausible-but-unsourced content.
- **Distinguish examples from concepts.** An instructor demonstrating something concrete — a code snippet, a cooking technique, a chord progression, a historical anecdote, a case study, a diagram — is an Example. Key Concepts are the *ideas* the demo is illustrating.

---

## Input

The user pastes the transcript text directly in the arguments. This skill does not read files and does not accept URLs — no tools are available to it.

**Empty or unusable input.** If the arguments contain fewer than ~200 characters of prose, or contain only a URL / filename / single sentence with no substantive content, respond with **only** this message and stop — do not produce a summary, do not add any preamble:

> "Please paste the transcript, subtitles, or lesson notes as the argument. I'll summarize the text directly — I don't fetch URLs or read files in this skill."

## Course & Topic Detection

Identify the **course name** and **topic** (lesson title / subject) from the transcript itself.

**Default action: auto-detect and proceed.** Infer the topic from the content — what the instructor is actually teaching — and fill in the Course field from explicit signals if present (instructor says "welcome to [course name]", a series title appears, etc.) or leave it as `*Not stated*` otherwise. If in doubt, infer and flag the inference with an italic note — do not ask.

**Ask the user only in this narrow case:** there is *no* topic signal anywhere in the transcript AND the content is generic enough ("intro chatter", "housekeeping", a fragment with no subject-matter) that a summary framing would be actively wrong without the user's input. In that case, ask once, concisely: "What course or topic is this from?" — then wait for the answer before producing output.

If the transcript is fragmentary but there's still a discernible topic, proceed — use the Overview section to flag the fragmentation, and put any best-effort inferences in italics in the header.

## Output Format

Print the summary to the console as a single markdown document using this exact structure:

```
# <Lesson title — either stated in the transcript or inferred from content>

**Course:** <Course name, or *Not stated*>
**Topic:** <Specific topic/subject of this lesson>

## Overview
<2-3 sentences framing what this lesson covers and what the learner will walk away understanding. Include any caveats about transcript quality here (e.g., "Transcript is partial / heavily machine-transcribed — summary may omit details.").>

## Key Concepts
- **<Concept>**: <One or two sentences explaining the idea as the instructor taught it.>
- **<Concept>**: <...>

## Examples & Demos
- <Each concrete example, walkthrough, demo, diagram, or code snippet the instructor used. Say what it demonstrated.>
- <If none, write: *No examples given.*>

## Takeaways
- <Actionable or memorable points the learner should hold onto. 3-6 bullets.>

## Action Items
- [ ] <Concrete thing the learner should do after this lesson — an exercise the instructor assigned, a recommended practice task, or an obvious next step to reinforce the material.>
- [ ] <...>
- <If none, write: *No action items.*>
```

## Guidelines

- **Be faithful to the transcript.** If the instructor only briefly mentioned something, don't elevate it to a Key Concept. If they spent ten minutes on a topic, it belongs in Key Concepts even if it's simple.
- **Bold concept names, not sentences.** Only the concept term itself is bolded in Key Concepts.
- **Concept explanations should teach, not just name.** "**Maillard reaction**: the browning that happens when amino acids and sugars react above ~140°C, producing the flavor compounds in seared meat and toasted bread" beats "**Maillard reaction**: explained by the instructor." "**Closure**: a function paired with captured variables from its defining scope" beats "**Closure**: a programming concept."
- **Examples should say what they demonstrated.** "Demonstrated searing a steak for 2 minutes per side to show the difference between browned and grey crust" beats "cooking example." "Walked through a React component re-rendering 5 times to illustrate `useEffect` dependency arrays" beats "React example."
- **Strip filler.** "Um", "so basically", "alright guys" do not belong in the summary. Neither do repeated hellos/goodbyes, ads, or sponsor reads.
- **Preserve domain terminology.** Keep the exact terms, names, and acronyms the instructor used — whether they're technical (HTTP, async/await), culinary (mise en place, deglaze), musical (diminished seventh, rubato), or anything else. Don't paraphrase a specific term into a generic one.
- **No attribution in bullets.** Don't write "The instructor said..." — just capture the point.
- **Action Items must be concrete and domain-appropriate.** Prefer things the instructor explicitly assigned ("try this exercise", "read chapter 4", "practice the C major scale slowly", "make the sauce before next class"). If none were assigned, extract at most 2-3 obvious practice steps that fit the subject — don't force coding-style "build a project" suggestions onto non-technical courses, and don't force reading assignments onto hands-on crafts. Do not fabricate homework.
- **Don't add a concluding paragraph.** End after the Action Items section. The format is the deliverable.

## Language

Detect the language of the transcript and write the summary **content** (descriptions, bullets, explanations) in that same language.

Keep structural headings (`## Key Concepts`, `## Takeaways`, etc.) and labels (`**Course:**`, `**Topic:**`) in English as-is.

Do not translate technical terms, proper nouns, or names of tools/books/people.

If the transcript contains multiple languages and no single one dominates, ask: "What language should I write the summary in?" before producing output.

## Examples

Two examples below — one technical, one non-technical — to illustrate that the same output structure fits any domain.

### Example 1 — Technical course

**Input transcript excerpt:**
> "Alright so today in our Kubernetes Fundamentals course we're going to talk about services. So a service in Kubernetes is basically a stable network endpoint for a set of pods. The reason we need this is pods are ephemeral — they come and go, their IPs change — but a service stays put. Let me show you a quick example. Here I've got a deployment with three nginx pods, and I'm going to expose it with `kubectl expose deployment nginx --port=80`. Now if I hit the service IP, I get load-balanced across all three pods. One thing to watch out for: by default this gives you a ClusterIP service which is only reachable inside the cluster. We'll cover NodePort and LoadBalancer next lesson."

**Expected output excerpt:**
```
# Kubernetes Services: Stable Endpoints for Ephemeral Pods

**Course:** Kubernetes Fundamentals
**Topic:** Services

## Overview
Introduces Kubernetes Services as a stable network abstraction over ephemeral pods. Covers the ClusterIP default and previews NodePort/LoadBalancer for the next lesson.

## Key Concepts
- **Service**: a stable network endpoint fronting a set of pods; persists even as pod IPs change.
- **Why services are needed**: pods are ephemeral — they come and go and their IPs change — so clients can't target pods directly.
- **ClusterIP (default service type)**: reachable only from inside the cluster.

## Examples & Demos
- Walked through `kubectl expose deployment nginx --port=80` on a 3-replica nginx deployment, showing load-balancing across the pods via the service IP.

## Takeaways
- Always front a set of pods with a service if anything needs to reach them reliably.
- By default, a service is internal-only (ClusterIP). Choose a different type if external access is needed.

## Action Items
- [ ] Create a nginx deployment and expose it with `kubectl expose` to reproduce the demo.
- [ ] Verify load-balancing by curling the ClusterIP from inside a pod and observing the backing pod change across requests.
```

### Example 2 — Non-technical course

**Input transcript excerpt:**
> "Welcome back to Italian Cooking Fundamentals. Today we're making a real carbonara — no cream, ever. Carbonara is just four things: pasta, eggs, guanciale, and Pecorino Romano. The whole technique is about temperature control. You render the guanciale until it's crisp, you cook your pasta, and then — and this is the part everyone gets wrong — you take the pan off the heat before you add the egg mixture. If the pan is too hot, you get scrambled eggs instead of a silky sauce. The starchy pasta water is what emulsifies everything. One trick: reserve a full cup of pasta water before you drain. Next week we're doing amatriciana, which is basically carbonara without the egg."

**Expected output excerpt:**
```
# Carbonara: The Real Roman Technique

**Course:** Italian Cooking Fundamentals
**Topic:** Carbonara

## Overview
Teaches authentic Roman carbonara with four ingredients and no cream. Central lesson is temperature control — the pan must come off the heat before the egg mixture goes in, or the eggs scramble.

## Key Concepts
- **The four ingredients**: pasta, eggs, guanciale, Pecorino Romano. No cream, ever.
- **Temperature control is the whole technique**: eggs turn into a silky sauce only if the pan is below scrambling temperature when they meet it.
- **Pasta water as emulsifier**: the starch in the reserved cooking water is what binds the egg and fat into a sauce rather than letting them split.

## Examples & Demos
- Demonstrated rendering guanciale to crisp, then pulling the pan off heat before adding the beaten egg-cheese mixture — illustrating the moment where temperature management decides success or failure.

## Takeaways
- If the eggs scramble, the pan was too hot when they went in.
- Reserve pasta water before draining — you can't get it back afterward.
- Real carbonara never contains cream.

## Action Items
- [ ] Make a single-portion carbonara and practice the off-heat timing.
- [ ] Reserve a full cup of pasta water next time you cook any pasta, as a habit.
```

