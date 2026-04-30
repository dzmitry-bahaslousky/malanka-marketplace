---
name: twenty-rules
description: Apply Dr. Piotr Wozniak's "Twenty Rules of Formulating Knowledge" (SuperMemo) when creating Anki flashcards. Triggers when the user asks to "create anki cards", "make flashcards", "add notes to anki", "memorize this", or wants help formulating effective spaced-repetition cards from study material. Enforces atomicity, cloze deletion, minimum-information principle, and other evidence-based card-design rules before calling the anki-mcp `addNote` tool.
---

# Formulating Effective Anki Flashcards

Based on ["Twenty Rules of Formulating Knowledge" by Dr. Piotr Wozniak](https://www.supermemo.com/en/blog/twenty-rules-of-formulating-knowledge). These principles dramatically improve retention and reduce study time. Apply them whenever the user asks you to create Anki cards via the `anki-mcp` MCP server.

> **Primary guardrail**: Never call the `addNote` MCP tool until the user has reviewed and explicitly approved the proposed cards. Show drafts first, iterate, then write.

## Core Principles

### 1. Do Not Learn If You Do Not Understand
Before creating any flashcard, ensure the user understands the concept.
- Ask clarifying questions if the topic seems unclear.
- Don't create cards from material the user hasn't comprehended.
- Suggest breaking down complex topics into understandable chunks first.

### 2. Learn Before You Memorize — Build the Big Picture First
Context before details. Overview before memorization.
- When the user wants to learn a new topic, suggest understanding the overall structure first.
- Example: Before creating cards about React hooks, ensure they understand React's component model.
- Create foundational cards before advanced ones.

### 3. Build Upon the Basics
Never skip fundamentals. Simple before complex.
- Identify prerequisite knowledge.
- Suggest creating basic cards first, then build complexity.
- Example: Learn addition before multiplication, HTTP before REST APIs.

### 4. Stick to the Minimum Information Principle
**CRITICAL**: Each card should test ONE piece of information.
- ❌ BAD: "What are the three main features of React and how do they work?"
- ✅ GOOD: Three separate cards, each testing one feature.
- Break complex cards into atomic units.
- Simpler cards = faster reviews = better retention.

### 5. Cloze Deletion is Easy and Effective
Use fill-in-the-blank format extensively.
- Convert statements into cloze deletions.
- Example: `The capital of {{c1::France}} is {{c2::Paris}}`
- Particularly effective for facts, definitions, and relationships.
- Multiple clozes per card are OK if they test the same context.

### 6. Use Imagery — Visual Memory is Powerful
Add images whenever possible. "A picture is worth a thousand words."
- Suggest adding relevant images for: geography, anatomy, architecture, historical figures, artworks, diagrams for abstract concepts.
- If the `anki-mcp` server exposes a media-attachment tool (e.g., `storeMediaFile` / `mediaActions`), use it to attach images to the note's fields after the user supplies or approves an image source.

### 7. Use Mnemonic Techniques
Memory aids make retention easier.
- Suggest mnemonics for difficult items.
- Use acronyms (e.g., "PEMDAS" for math order of operations).
- Create vivid, memorable associations.
- Link abstract concepts to concrete images.

### 8. Avoid Sets — They're Difficult to Memorize
Large lists are memory killers.
- ❌ BAD: "List all 50 US state capitals"
- ✅ GOOD: Convert to cloze deletions or per-item cards.
- If a set is necessary, break it into overlapping subsets.
- Use enumerations with context cues.

### 9. Avoid Enumerations When Possible
Lists are harder than single facts.
- Instead of "What are the 7 principles of X?", create 7 separate cards.
- If enumeration is necessary:
  - Use cloze deletion: `The 7 principles are: {{c1::principle1}}, {{c2::principle2}}…`
  - Add context and memory aids.
  - Keep lists short (max 5–7 items).

### 10. Combat Interference — Make Items Distinct
Similar cards cause confusion.
- Avoid creating nearly identical cards.
- Make distinctions explicit; add context to differentiate similar concepts.
- Example: ❌ "Capital of Guyana?" and "Capital of Suriname?" (too similar) → ✅ "Capital of Guyana (only English-speaking country in South America)?"

### 11. Optimize Wording — Keep It Simple and Clear
Shorter, simpler wording = faster reviews.
- Remove unnecessary words; use active voice; make questions unambiguous.
- ❌ "In the context of programming, when considering the various paradigms, what would you say is the main characteristic that defines the functional approach?"
- ✅ "Functional programming's main characteristic?"

### 12. Refer to Other Memories — Build Connections
Connect new knowledge to existing knowledge.
- Reference previously learned concepts.
- Build knowledge networks.
- Example: `Like REST but for GraphQL: {{c1::single endpoint}}`
- Use analogies to familiar concepts.

### 13. Personalize and Provide Examples
Personal context dramatically improves retention.
- Link to the user's experiences, projects, life, or interests.
- ❌ Generic: "TypeScript interface definition?"
- ✅ Personal: "TypeScript interface (like the User type in your project)?"

### 14. Rely on Emotional States
Emotion enhances memory.
- Use vivid, emotionally charged examples when appropriate.
- Link to memorable events or stories.
- Make boring facts interesting with context.

### 15. Context Cues Simplify Wording
Categories and prefixes reduce cognitive load.
- Add subject prefixes: `bio:`, `hist:`, `prog:`.
- Use tags effectively; group related cards in decks.
- Example: `js: Array method for filtering?`

### 16. Redundancy Can Be Beneficial
Some repetition from different angles helps.
- Create multiple cards for critical concepts from different angles.
- Test the same fact in different contexts.
- Balance with "don't overdo it".

### 17. Provide Sources and References
Context helps understanding and future reference.
- Add source information in card metadata or an extra field.
- Link to documentation, books, or articles.
- Helps when reviewing old cards.

### 18. Prioritize — Learn What Matters Most
Not everything deserves a flashcard.
- Focus on applicable, useful knowledge.
- Ask: "Will I actually need to recall this?"
- Quality over quantity.

### 19. Eliminate Interference at the Source (Graphic Deletion)
When images can replace text, prefer image-based occlusion over verbal questions.
- For diagrams, maps, anatomy, UI screenshots: hide a region of the image rather than asking a verbal question about it.
- Image occlusion eliminates wording ambiguity entirely — the prompt is the picture itself.
- Pair with rule 6 (imagery) for any spatial or structural knowledge.

### 20. Provide Date Stamping
Time-sensitive knowledge needs a date.
- For facts that may change (statistics, software versions, current officeholders, prices), add the date the fact was true.
- Example: `As of {{c1::2025}}, the latest LTS Node.js is {{c2::22}}`.
- Lets the user spot stale cards on review and update or suspend them.

## Workflow for Creating Cards

1. **Understand First** — verify the user understands the concept.
2. **Build Context** — ensure foundational knowledge exists.
3. **Apply Minimum Information** — break into atomic facts.
4. **Choose Format** — prefer cloze deletion for facts, Q&A for concepts.
5. **Optimize Wording** — clear, concise, unambiguous.
6. **Add Richness** — images, mnemonics, personal connections.
7. **Review** — check for interference with existing cards.

## When the User Asks to Create Cards

- Ask about their understanding of the topic.
- Suggest the number and type of cards (don't just create them).
- Show examples of proposed cards.
- **Wait for approval before creating.**
- Apply these rules to make cards effective.
- Use the `addNote` MCP tool **only after the user confirms.**

## Example Transformations

### Example 1: Complex → Simple

❌ **Bad Card**
- Q: "What are the main differences between REST and GraphQL APIs and when would you use each?"
- A: [Long paragraph explaining both]

✅ **Good Cards** (4 separate cards)
- `REST uses {{c1::multiple endpoints}}, GraphQL uses {{c2::single endpoint}}`
- `GraphQL advantage over REST: {{c1::client specifies exact data needed}}`
- `REST advantage over GraphQL: {{c1::simpler caching}} and {{c2::better tooling support}}`
- `Use GraphQL when: {{c1::client needs flexible queries}} and {{c2::reducing over-fetching matters}}`

### Example 2: Generic → Personal

❌ **Bad Card**
- Q: "What is a closure in JavaScript?"
- A: "A function that has access to outer function variables"

✅ **Good Card**
- Q: "js: Closure definition (like in your React hooks code)?"
- A: "Function that remembers variables from its outer scope even after outer function returns"

### Example 3: Adding Visual Memory

❌ **Text Only**
- Q: "Structure of the human heart?"
- A: [Text description]

✅ **With Image**
- Q: [Image of heart with blank labels]
- A: [Same image with labels visible]
- (Use `mediaActions` to help the user attach the image.)

## Remember

- **Quality > Quantity**: Five well-formed cards beat twenty poorly made ones.
- **Atomic Knowledge**: One fact per card, always.
- **User Context**: Personalize everything you can.
- **Understanding First**: Never create cards from material the user doesn't understand.
