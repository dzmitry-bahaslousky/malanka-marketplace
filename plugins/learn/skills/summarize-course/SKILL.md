---
name: summarize-course
description: Summarize raw text from a video course (transcript, subtitles, or lesson notes) into a clean, structured Markdown summary. Triggers when the user runs /learn:summarize-course, pastes a course transcript and asks for a summary, or says "summarize this lesson", "turn this transcript into notes", "make course notes from this". Produces sections for Overview, Key Concepts, Examples & Demos, Takeaways, Open Questions, and Resources. Output is printed to the console — no files are written.
argument-hint: "<paste the video transcript / subtitles / notes here>"
allowed-tools: []
version: 0.1.0
---

# Video Course Summarizer

## Think Before Summarizing

Don't assume. Don't invent. Surface what's missing.

Before producing output:

- **Check for transcript content.** If no substantive text was pasted (just a short sentence, a URL, or nothing), do NOT generate a summary. Ask the user to paste the transcript.
- **Don't invent concepts the instructor didn't teach.** Summarize what's actually in the text. If the transcript is fragmentary (cut off, machine-transcribed with errors, lots of filler), say so in Overview rather than filling gaps with plausible-but-unsourced content.
- **Distinguish examples from concepts.** An instructor demonstrating a code snippet or showing a diagram is an Example, not a Key Concept. Key Concepts are the *ideas* the demo is illustrating.
- **Open Questions means real questions left unresolved by the lesson** — either questions the instructor explicitly raised and didn't answer, or obvious next-step questions the content opens up. Don't manufacture questions just to fill the section.

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

## Open Questions
- <Questions the instructor raised without answering, or obvious follow-up questions the lesson opens up.>
- <If none, write: *No open questions.*>

## Resources
- <Any books, papers, links, tools, libraries, or docs the instructor mentioned by name.>
- <If none, write: *None mentioned.*>
```

## Guidelines

- **Be faithful to the transcript.** If the instructor only briefly mentioned something, don't elevate it to a Key Concept. If they spent ten minutes on a topic, it belongs in Key Concepts even if it's simple.
- **Bold concept names, not sentences.** Only the concept term itself is bolded in Key Concepts.
- **Concept explanations should teach, not just name.** "**Closure**: a function paired with captured variables from its defining scope" beats "**Closure**: explained by the instructor."
- **Examples should say what they demonstrated.** "Walked through a React component re-rendering 5 times to illustrate how `useEffect` dependency arrays work" beats "React example."
- **Strip filler.** "Um", "so basically", "alright guys" do not belong in the summary. Neither do repeated hellos/goodbyes, ads, or sponsor reads.
- **Preserve terminology.** Keep the exact technical terms, names, and acronyms the instructor used. Don't paraphrase a specific term into a generic one.
- **No attribution in bullets.** Don't write "The instructor said..." — just capture the point.
- **Don't add a concluding paragraph.** End after the Resources section. The format is the deliverable.

## Language

Detect the language of the transcript and write the summary **content** (descriptions, bullets, explanations) in that same language.

Keep structural headings (`## Key Concepts`, `## Takeaways`, etc.) and labels (`**Course:**`, `**Topic:**`) in English as-is.

Do not translate technical terms, proper nouns, or names of tools/books/people.

If the transcript contains multiple languages and no single one dominates, ask: "What language should I write the summary in?" before producing output.

## Example

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

## Open Questions
- How do NodePort and LoadBalancer services differ, and when should each be used? (Teased for next lesson.)

## Resources
- None mentioned.
```
