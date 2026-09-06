# Tutor notes

Student-specific state and course conventions. Read this file before creating or revising a lesson.

## Current course state

- Eight lessons are complete.
- Lesson 3 taught present `to be`: positive, negative, question, and short-answer forms. Its material is archived under `legacy/`.
- Lesson 4 (`lessons/0002-review-and-present-simple-positive.html`) taught positive action verbs and the distinction between `to be` and action verbs.
- Lesson 5 (`lessons/0003-subjects-and-present-simple-negatives.html`) taught complete subjects and present-simple action negatives. The full lesson was completed, including the reading section and `sometimes`.
- `exercises/0002-cumulative-present-simple-practice.html` Levels 1-4 were assigned as homework. Completion and accuracy are not verified yet.
- Lesson 6 (`lessons/0004-present-simple-action-questions.html`) was completed and went generally well. The student still had some difficulty deciding between `to be` and an action verb.
- `exercises/0003-present-simple-question-practice.html` is the graded practice page for Lesson 6.
- Lesson 7 (`lessons/0005-to-be-action-verb-and-third-person-spelling.html`) was completed and received fairly well. The student still hesitates when choosing between `to be` and an action verb, but the distinction is improving. Extended third-person spelling (`-s`, `-es`, `-ies`) was easy during the lesson.
- `exercises/0004-third-person-present-simple-practice.html` is the graded homework page for Lesson 7.
- Lesson 8 (`lessons/0006-short-answers-and-mixed-questions.html`) taught action-verb short answers while consolidating mixed `to be` and action-verb questions.
- `exercises/0005-short-answers-and-mixed-questions-practice.html` was completed and self-checked. Levels 1-5 were almost entirely correct before checking; the later reading and personal-question levels required more correction.
- Lesson 8 showed that the student can usually identify sentence type and verb type when prompted, but can lose those decisions while selecting and arranging the complete grammar form.
- Lesson 9 should add no grammar. It should teach procedural use of a concise on-screen sentence-builder table before `there is / there are` is introduced.

## Student

- Russian L1; understands many simple spoken sentences and already knows some vocabulary.
- Subject-dropping is a recurring Russian-L1 error.
- Interested in cars first and technology second.
- Reports dyslexia and difficulty consulting written notes. He tries to memorize grammar immediately because returning to notes is hard.
- `to be` with pronoun subjects is relatively stable.
- Multiword subjects such as `your parents` and `the tires` need continued retrieval.
- He can apply individual rules during focused practice, but mixing similar systems can overload him.
- He loses handwritten notes in his notebook and prefers to consult grammar on screen. Quick references must be concise, easy to find, and linked from current materials.
- Lessons take place roughly twice per week. There is no known date for a school quantifier test.

## Lesson 5 evidence

- Complete-subject identification and action negatives were easy during focused practice.
- After `to be` and action negatives were mixed, his performance collapsed globally.
- During the collapse, he temporarily could not identify a complete subject or replace it with a pronoun, even though both had been easy earlier.
- This led to the delayed-retrieval gate used in Lesson 6.

## Teaching method

- Start lesson pages with homework read-aloud and correction.
- Start every new topic by explaining why it is needed and what communicative job it performs.
- Show the complete grammar map, then build the student's handwritten version one row at a time.
- For each rule: explain meaning, show one small card, solve one example together, ask the student to explain it, hide the card, reconstruct the row from memory, correct immediately, practice the rule, then finish with one no-card item.
- Handwriting supports encoding, but do not make him copy long paragraphs or a large table before understanding it.
- Use full forms before contractions: `am not`, `is not`, `are not`, `do not`, `does not`.
- Keep scaffolds visible until he succeeds and remove them gradually.
- Do not add TTS or other accessibility features without evidence that they solve a reported barrier.
- Do not put timing labels in student-facing lesson sections.
- Do not build scheduled breaks into lessons.
- Put difficult new or integrated grammar before end-of-lesson fatigue.
- Use a performance gate before adding a new system. Prepared material does not have to be completed.
- If performance suddenly collapses, stop adding grammar and switch to familiar oral or reading work instead of repeating the full explanation.
- Use this lesson structure by default: delayed retrieval -> one small language point with controlled practice -> familiar-grammar reading or listening -> guided speaking or writing -> no-notes exit check.
- Until sentence construction is stable, give grammar and controlled practice most of the lesson time. Input should reinforce the grammar rather than introduce an unfamiliar grammar system.

## Exercise design

- Progress from low-load recognition to independent production: identify -> sort -> choose -> complete -> transform -> build from prompts -> speak -> write -> repair -> mix.
- Error-repair tasks come late and contain one clear error with one natural intended correction.
- Never use ambiguous prompts such as `Math study hard`.
- Include reading, speaking, and in-class writing before the student knows the complete tense system.
- Separate grammar assessment from spelling, punctuation, and pronunciation.
- During read-aloud work, let him finish the sentence, correct target grammar, then address pronunciation.
- Mixed exercises must separate decisions when needed: meaning -> grammar lane -> subject agreement -> verb form -> complete sentence.
- Use delayed no-notes retrieval at the beginning of the following lesson to judge storage strength.
- In self-checked homework, `+` means the student's first answer matched the key and `-` means it was corrected after looking. Treat these marks as useful reports, not verified assessment; spot-check the work.
- Future homework answer keys show representative samples for roughly 30-40% of each level. Five presses on the homework meta line unlock all answers for the tutor without opening the answer sections.

## Language policy

- Teach American English. Convert British vocabulary and spelling when introducing words: `tire`, `gas`, `trunk`, `hood`, `truck`, `highway`, `fall`, `elevator`, `turn signals`, `parking lot`.
- Grammar terms stay in English. Russian is used for concise glosses and clarification.
- Every example must be natural, not merely grammatical.
- Use present simple only for identity, descriptions, routines, habits, facts, and schedules.
- Introduce a simple useful word such as `sometimes` rather than force known vocabulary into an unnatural sentence.
- Begin with known vocabulary. Record every new word sense in `VOCABULARY.md`.
- A dedicated reading may contain two or three inferable new content words without prior explanation. Keep its grammar familiar, test general meaning rather than word definitions, and explain the new words in the homework.
- Avoid unrelated spelling rules, tense contrasts, or unusual meanings while introducing a grammar rule.
- Cars are a teaching context, not the learning goal.

## Course sequence

1. Teach reliable use of the present-simple sentence-builder table without adding grammar.
2. Teach `there is / there are` after delayed mixed retrieval is stable.
3. Teach singular/plural nouns and `a/an`.
4. Teach countable and uncountable nouns.
5. Teach `some` and `any`.
6. Teach `many` and `a lot of`.

The sequence is conditional on evidence. Do not treat coverage as learning.

## Lesson system

- New lessons, exercises, and references load `assets/pico.min.css`, then `assets/fonts.css`, then `assets/course.css`.
- Pico CSS v2.1.1 is vendored. Do not replace it with a CDN dependency.
- Source Serif 4 is used for headings. Source Sans 3 is used for body copy and UI. Both are vendored with Latin and Cyrillic coverage.
- Use no more than these two typefaces.
- Preserve the academic-workbook design: approximately 74rem desktop canvas, paper-white background, dark high-contrast text, blue accent, flat editorial sections, no shadows, and no rounded dashboard cards.
- Tables must have explicit light backgrounds and dark text. They may scroll horizontally on mobile.
- Materials must remain responsive and print-friendly. Use `<details>` for answer keys and `.blank-line` for printable writing spaces.
- Legacy materials are isolated under `legacy/`. Do not use their styling as a template.
- The pre-commit hook regenerates `index.html` from active lessons, exercises, and references.
- Every lesson has a separate graded homework page and links to it.
- Future homework pages load `assets/homework-answers.js` and use partial answer keys. Do not retrofit completed homework unless requested.
- `reference/0001-present-simple-sentence-builder.html` is the canonical quick reference for the current grammar-selection process.

## New-chat checklist

1. Read `MISSION.md` and this file.
2. Read every active file in `learning-records/`.
3. Read `VOCABULARY.md` and distinguish `prepared` from `introduced`.
4. Read the latest completed lesson and the prepared next lesson.
5. Read `assets/course.css` before adding new UI components.
6. Preserve natural American English, graded exercise progression, and the established visual system.
7. Never infer mastery from a generated lesson, assigned homework, or immediate success.

## Pitfalls to avoid

- Teaching quantifiers before the foundation is evidenced as learned.
- Letting known vocabulary hide sentence-construction gaps.
- Treating an integration task as one small rule merely because little new terminology was introduced.
- Continuing to add explanations after a global performance collapse.
- Marking prepared lessons or vocabulary as taught.
