# Socratic Institutional Pilot

**Educational intelligence for the AI era.**

This repository contains a functional, fictional institutional pilot demonstrating how an institution-approved language model could support faculty-guided Socratic assessment without becoming the assessment authority.

## Central thesis

Institutions may already have capable AI services. What they still need is an educational architecture that turns language capability into a repeatable, curriculum-aligned, governed, and faculty-reviewable assessment process.

> Institution-approved AI provides language intelligence. The Socratic Platform provides educational intelligence.

The model is a replaceable component. The differentiated product is the surrounding system: pedagogical policy, learner-state tracking, evidence modeling, knowledge packs, stopping conditions, and faculty governance.

## Current status

Independent prototype. No institution has approved, endorsed, or deployed this project. All course names, learner records, dialogue, and evidence are fictional.

## Phase 1 functional demonstration

The current build provides a guided, end-to-end institutional workflow:

1. faculty configure a bounded assessment;
2. a learner reviews the objective and submits a response;
3. the dialogue progresses through targeted Socratic moves;
4. the “Why this question?” panel explains the current educational decision;
5. live evidence indicators update across the dialogue;
6. faculty receive a transcript-grounded evidence portfolio;
7. the provider-boundary view shows that the language model remains replaceable.

The interaction is deterministic and uses fictional data. It demonstrates the institutional experience without exposing the proprietary reasoning core.

## What this repository demonstrates

- explicit differentiation from a general-purpose chatbot;
- curriculum-aligned assessment setup;
- a bounded learner dialogue about validity and soundness;
- visible pedagogical decisions tied to unmet evidence needs;
- live indicators for definition, distinction, application, and revision;
- a faculty-facing evidence portfolio and suggested follow-up;
- a replaceable institution-approved AI provider boundary;
- explicit faculty review and governance language.

## What this repository does not contain

- the proprietary Socratic reasoning engine;
- production prompts, evidence policies, or scoring logic;
- real learner or institutional information;
- production authentication or storage;
- AI credentials or provider endpoints;
- LMS integration or grade passback;
- automatic grading or misconduct determinations.

## Local preview

No package installation or build process is required. Clone or download the repository and open `index.html` in a modern browser.

## GitHub Pages deployment

The site is designed for GitHub Pages using the repository root.

1. Open **Settings → Pages**.
2. Select **Deploy from a branch**.
3. Choose `main` and `/root`.
4. Save.

After Phase 1 is merged, the expected public URL is:

`https://noumena000.github.io/Socratic-Institutional-Pilot/`

## Documentation

- [Why an institutional platform?](docs/differentiation.md)
- [Pilot scope](docs/pilot-scope.md)
- [Proposed architecture](docs/architecture.md)
- [Governance principles](docs/governance.md)
- [Pilot roadmap](docs/roadmap.md)
- [Phase 1 acceptance criteria](docs/phase-1-acceptance.md)
- [GitHub Pages deployment](docs/deployment.md)

## Next development

1. Replace demonstration percentages with structured learner-state events from the private core.
2. Add schema validation to the mock provider contract.
3. Add faculty annotation and evidence export.
4. Prepare a secure adapter boundary for an institution-approved AI sandbox.
5. Evaluate authentication, data governance, accessibility, and optional LMS integration only after approval.

## Rights and permitted use

Copyright © 2026 Benjamin Moss. All rights reserved.

This project is provided for viewing and evaluation only. No permission is granted to copy, modify, distribute, deploy, sublicense, or incorporate it into another system without written authorization. See [LICENSE-PROPRIETARY.md](LICENSE-PROPRIETARY.md).
