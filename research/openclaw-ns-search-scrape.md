# OpenClaw prompt: capture ns.com/search in full

Paste the block below into OpenClaw (or any browser agent) **while logged into
ns.com in that browser**. It is your own account and your own participation in
their public finder's-fee program, so this is capturing a form you are entitled
to fill in, not bypassing anything.

Save the output to `research/ns-search-capture.md` in this repo and tell Claude
it is there. That single file gives full fidelity on what NS is actually asking
for, which is what the submission drafts are scored against.

---

## THE PROMPT

```
Go to https://ns.com/search while logged in.

Your job is to capture the ENTIRE second-site submission form and everything
around it, with perfect fidelity, into structured Markdown. I am going to fill
this form in for real, so completeness matters more than brevity. Do not
summarize, do not paraphrase, do not skip fields you think are unimportant.

Work through it in this order.

1) PAGE FRAME
   - The exact page title, any subtitle, and every line of intro copy.
   - The full prize / finder's-fee text, verbatim, including every tier and
     every rule about multiple submissions, spam, and disqualification.
   - Any deadline, cutoff date, submission cap, or "we are looking for" text.
   - Any indicator of how many submissions exist so far, or a leaderboard,
     ranking, or status display.

2) THE FORM SCHEMA
   For EVERY field on the page, in the order it appears, record:
   - Section / group heading it sits under
   - The exact field label, including whether it is marked required
   - Field type (text, email, tel, number, select, radio, checkbox, file,
     textarea, date, URL)
   - The placeholder text and any pre-filled default value
   - For selects and radios and checkboxes: EVERY available option, in order.
     Open each dropdown and enumerate the full option list. If a country
     dropdown has 200 entries, say so and list them.
   - Any helper text, hint, tooltip, example, or microcopy under the field
     (for example, notes like "use airport code only" or "a unit is defined
     as a room")
   - Any validation rule you can observe: min or max, character limits,
     accepted file types, number of files, required formats
   - Whether the field only appears conditionally, and what triggers it

   Present this as a Markdown table per section, plus notes underneath for
   anything a table cannot hold.

3) REPEATERS AND DYNAMIC BEHAVIOUR
   - Any "add another" control (for example additional visa types). Note what
     gets repeated, whether there is a limit, and whether the repeated block
     has the same fields.
   - Any field that reveals follow-up questions when answered a certain way.
     Test each yes/no toggle and record what appears. Do NOT submit the form.

4) UPLOADS
   - Photo upload: accepted formats, max size, max count, and the exact
     guidance text about what photos they want.
   - Any video walkthrough field and what link types it accepts.

5) HIDDEN SIGNAL
   - Read the page's HTML for anything not visible: hidden inputs, data
     attributes, aria labels, field names in the DOM, validation messages in
     the source, and any JSON blob or embedded config that describes the form.
     Field NAMES are especially useful, so include the underlying name or id
     for each field alongside its label.
   - Any analytics events, scoring hints, or weighting visible in the source.

6) EVERYTHING ELSE ON THE JOURNEY
   - Follow and capture any linked FAQ, rules, terms, judging-criteria, or
     example-submission page. Include their full text.
   - Note any autosave behaviour, progress indicator, or multi-step wizard,
     and how many steps there are.
   - Screenshot each distinct section of the form and list the screenshot
     filenames inline where they belong.

OUTPUT FORMAT
Return one Markdown document with this structure:

  # ns.com/search capture
  Captured: <ISO date> by <account name>
  ## 1. Page frame
  ## 2. Prize and rules (verbatim)
  ## 3. Form schema
     ### <Section name>
     | Field | Required | Type | Options / placeholder | Helper text | DOM name |
  ## 4. Repeaters and conditional logic
  ## 5. Uploads
  ## 6. Hidden signal from the DOM
  ## 7. Linked pages (full text)
  ## 8. Screenshots
  ## 9. Anything surprising

CRITICAL RULES
- Do NOT click Submit. Do NOT submit a proposal. This is a read-only capture.
- Do NOT invent or guess any field, option, or rule. If something is unclear
  or you could not reach it, write "UNKNOWN" and say why.
- Quote labels and helper text EXACTLY as written, including capitalisation
  and punctuation.
- If the page saves drafts automatically, leave any fields you typed into
  cleared before you finish.
```

---

## Why each part matters for the submission

The capture feeds directly into scoring a proposal:

| Section captured | What it unlocks |
|---|---|
| Prize tiers and spam rules | How many submissions to make and how precise each must be |
| Full field list with required flags | The completeness bar. A blank required field is likely an instant loss |
| Every select option | Whether our candidate countries and property types are even offered |
| Helper microcopy | Their exact definitions. "A unit is a room" changes the bed maths entirely |
| Conditional logic | Which yes/no answers open extra questions, so we prepare those answers in advance |
| DOM field names | Reveals what they store and therefore what they filter and rank on |
| Judging or FAQ pages | Explicit weighting, if they publish any |
| Upload rules | How many photos to commission and in what format |

## What to do after the capture

1. Save it to `research/ns-search-capture.md`.
2. Tell Claude: "the capture is in research/ns-search-capture.md, draft the
   Alatau submission."
3. Claude fills every field to spec against the P0-P7 priority criteria at
   `/portal/scout`, flagging exactly which answers need something only you can
   supply: personal visa receipts with dates, photos, a maps pin, and any warm
   introduction to a named tech champion.

## The gaps only you can close

The form asks for things no amount of research can fabricate, and these are
almost certainly what separates a top-10 submission from a top-1000 one:

- **Personal visa receipts.** They ask whether YOU applied and got a visa, with
  exact dates and screenshots. Your Malaysia and Network School history is the
  real asset here.
- **Warm introductions.** They ask for three tech champions and whether you can
  introduce them. An intro you can actually make is worth more than a perfect
  paragraph.
- **Photos and a maps pin.** Five or more photos of the actual site. This needs
  you, a broker, or someone on the ground.
- **Your relationship to the site.** Owner, knows the owner, broker, or fan.
  Honesty here is load-bearing; they are trying to find sites they can actually
  transact on.
