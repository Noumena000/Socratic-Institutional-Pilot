# Phase 1.5 — Educational Intelligence

## Purpose

Phase 1.5 makes the pedagogical architecture visible without publishing the private reasoning engine.

The demonstration begins with curriculum rather than an AI prompt:

```text
Learning objectives
        ↓
Knowledge pack
        ↓
Observed learner evidence
        ↓
Missing evidence
        ↓
Pedagogical decision
        ↓
Next Socratic move
        ↓
Faculty evidence portfolio
```

## Demonstrated capabilities

- fictional module overview and independently written learning objectives;
- public knowledge-pack viewer;
- target concepts and evidence requirements;
- common-misconception and pedagogical-policy examples;
- stopping conditions;
- live “Why this question?” explanation;
- learner-state visualization;
- educational decision trace;
- transcript-linked faculty evidence portfolio;
- provider-independent architecture.

## Public/private boundary

This repository simulates the outputs of the educational intelligence layer. It does not publish:

- proprietary reasoning policies;
- production prompts;
- model-evaluation logic;
- scoring thresholds;
- private provider connectors;
- institution-specific curriculum or learner information.

## Acceptance criteria

Phase 1.5 is complete when a reviewer can answer all of the following from the demonstration:

1. Which learning objective is currently being tested?
2. What evidence has the learner demonstrated?
3. What evidence remains missing?
4. Why was the next question selected?
5. What caused the dialogue to stop?
6. What evidence does the instructor receive?
7. Which functions belong to the educational layer rather than the language model?

## Next phase

Phase 2 should add a provider-configuration abstraction with demonstration, institution-approved, OpenAI-compatible research, and local-model modes. Credentials must not be stored or transmitted from the public GitHub Pages client.
