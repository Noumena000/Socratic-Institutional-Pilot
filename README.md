# Socratic Institutional Pilot

**Educational intelligence for the AI era.**

This repository contains a functional, fictional institutional pilot demonstrating how an institution-approved language model could support faculty-guided Socratic assessment without becoming the assessment authority.

## Central thesis

Institutions may already have capable AI services. What they still need is an educational architecture that turns language capability into a repeatable, curriculum-aligned, governed, and faculty-reviewable assessment process.

> Institution-approved AI provides language intelligence. The Socratic Platform provides educational intelligence.

The model is a replaceable component. The differentiated product is the surrounding system: learning objectives, knowledge packs, pedagogical policy, learner-state tracking, evidence provenance, stopping conditions, and faculty governance.

## Current status

Independent prototype. No institution has approved, endorsed, or deployed this project. All course names, learner records, dialogue, and evidence are fictional.

## Phase 1.5 educational intelligence demonstration

The current build provides a guided, curriculum-first institutional workflow:

1. faculty review a fictional Applied Ethics module and its learning objectives;
2. a knowledge-pack viewer exposes target concepts, evidence requirements, misconceptions, pedagogical policy, and stopping conditions;
3. a learner launches a Utilitarianism case dialogue;
4. the “Why this question?” panel explains each educational decision;
5. a learner model updates across definition, application, objection, and revision;
6. a visible decision trace links objectives, observed evidence, missing evidence, and the next Socratic move;
7. faculty receive a transcript-grounded evidence portfolio;
8. the provider-boundary view shows that the language model remains replaceable.

The interaction is deterministic and independently authored. It demonstrates the institutional experience without reproducing institutional course materials or exposing the proprietary reasoning core.

## What this repository demonstrates

- explicit differentiation from a general-purpose chatbot;
- curriculum-to-assessment alignment;
- a public knowledge-pack visualization;
- a bounded Utilitarianism dialogue using fictional course content;
- visible pedagogical decisions tied to unmet evidence needs;
- live learner-state indicators;
- transcript-linked evidence provenance;
- a faculty-facing evidence portfolio and suggested follow-up;
- a replaceable institution-approved AI provider boundary;
- explicit faculty review and governance language.

## What this repository does not contain

- the proprietary Socratic reasoning engine;
- production prompts, evidence policies, or scoring logic;
- real learner or institutional information;
- copied institutional course pages, assignments, or rubrics;
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

Expected public URL:

`https://noumena000.github.io/Socratic-Institutional-Pilot/`

## Documentation

- [Why an institutional platform?](docs/differentiation.md)
- [Pilot scope](docs/pilot-scope.md)
- [Proposed architecture](docs/architecture.md)
- [Governance principles](docs/governance.md)
- [Pilot roadmap](docs/roadmap.md)
- [Phase 1 acceptance criteria](docs/phase-1-acceptance.md)
- [Phase 1.5 educational intelligence](docs/phase-1-5-educational-intelligence.md)
- [GitHub Pages deployment](docs/deployment.md)

## Next development

1. Replace demonstration learner-state percentages with validated reasoning events from the private core.
2. Add schema validation to the mock provider contract.
3. Add faculty annotation and evidence export.
4. Add provider configuration without exposing credentials in the public client.
5. Prepare a secure adapter boundary for an institution-approved AI sandbox.
6. Evaluate authentication, data governance, accessibility, and optional LMS integration only after approval.

## Rights and permitted use

Copyright © 2026 Benjamin Moss. All rights reserved.

This project is provided for viewing and evaluation only. No permission is granted to copy, modify, distribute, deploy, sublicense, or incorporate it into another system without written authorization. See [LICENSE-PROPRIETARY.md](LICENSE-PROPRIETARY.md).
