# Proposed Architecture

```text
Institution-approved AI service
              │
              ▼
      Provider adapter boundary
              │
              ▼
 Proprietary Socratic reasoning core
              │
              ▼
 Institutional pilot experience
      ├── learner dialogue
      ├── evidence timeline
      ├── understanding map
      └── faculty decision snapshot
```

## Separation of responsibilities

### Institutional pilot repository

This public repository demonstrates the workflow, interface, governance principles, and provider boundary using fictional data and simulated outputs.

### Proprietary reasoning core

The private core is expected to manage:

- reasoning-event interpretation;
- cumulative learner state;
- pedagogical-move selection;
- evidence-update policies;
- contradiction and revision tracking;
- stopping conditions;
- model-output validation.

The core is intentionally not implemented in this public repository.

### Institution-approved AI provider

An approved language-model service may assist with bounded language tasks such as response interpretation, structured extraction, question phrasing, and transcript-grounded summarization. It should not independently determine grades, misconduct, or institutional policy.

## Provider contract

A future provider adapter should accept a constrained request and return validated structured data. Provider credentials and calls must remain server-side in a production deployment.

## Future deployment layers

1. Static fictional demonstration.
2. Secure provider proof of concept using sandbox data.
3. Controlled pilot with authentication, access controls, retention rules, and audit logs.
4. Optional LMS launch and faculty-approved grade workflow after validation.