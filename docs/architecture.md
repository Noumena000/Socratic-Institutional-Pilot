# Proposed Architecture

## Central design principle

The AI model is a replaceable language provider. The educational workflow is the product.

```text
Faculty-defined learning objectives
                │
                ▼
           Knowledge pack
                │
                ▼
Proprietary educational intelligence layer
  ├── reasoning-event interpretation
  ├── cumulative learner state
  ├── pedagogical-move selection
  ├── evidence-update policy
  ├── contradiction and revision tracking
  └── stopping conditions
                │
                ▼
      Provider adapter boundary
                │
                ▼
 Institution-approved AI service
                │
                ▼
  Structured learner dialogue
                │
                ▼
 Transcript-linked evidence portfolio
                │
                ▼
          Faculty judgment
```

## Separation of responsibilities

### Institutional pilot repository

This public repository demonstrates the workflow, interface, governance principles, differentiation, and provider boundary using fictional data and simulated outputs.

It does not implement or disclose the complete private reasoning policy.

### Proprietary educational intelligence layer

The private core is expected to manage:

- reasoning-event interpretation;
- cumulative learner state;
- pedagogical-move selection;
- evidence-update policies;
- contradiction and revision tracking;
- stopping conditions;
- model-output validation;
- provenance linking between conclusions and learner turns.

### Institution-approved AI provider

An approved language-model service may assist with bounded language tasks such as:

- interpreting learner wording;
- extracting claims, reasons, distinctions, and objections;
- phrasing an already-selected Socratic move;
- producing transcript-grounded summaries.

The provider should not independently determine grades, misconduct findings, institutional policy, learning objectives, or the sufficiency of assessment evidence.

## Why the separation matters

The architecture allows an institution to change language-model providers without replacing the pedagogical policy, evidence model, knowledge packs, faculty workflow, or evaluation framework.

It also makes governance more explicit: the language model performs bounded language functions, while faculty and the platform's educational policy define what the assessment is seeking and how evidence is reviewed.

## Provider contract

A future provider adapter should accept constrained requests and return validated structured data. Provider credentials and calls must remain server-side in a production deployment.

A production contract should include:

- schema version;
- request purpose;
- permitted input fields;
- expected structured output;
- validation rules;
- model and provider metadata;
- timeout and failure behavior;
- audit identifier;
- prohibition on autonomous grading or misconduct conclusions.

## Future deployment layers

1. Static fictional demonstration.
2. Secure provider proof of concept using sandbox data.
3. Controlled pilot with authentication, access controls, retention rules, accessibility validation, and audit logs.
4. Optional LMS launch and faculty-approved grade workflow after educational and governance validation.
