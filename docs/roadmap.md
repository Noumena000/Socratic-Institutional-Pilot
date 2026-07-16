# Institutional Pilot Roadmap

## Phase 0 — Foundation

**Goal:** establish the product thesis, public boundaries, architecture, governance, and evaluation criteria.

Deliverables:

- institutional problem statement;
- explicit differentiation from a general AI chatbot;
- provider-independent architecture;
- public/private intellectual-property boundary;
- fictional-data and faculty-governance commitments;
- one defined vertical-slice assessment;
- readiness criteria for the next phase.

Phase 0 does not include a production AI connection, learner authentication, institutional data, automated grades, or LMS integration.

## Phase 1 — Functional demonstration

**Goal:** demonstrate one end-to-end fictional assessment workflow.

The learner experience should show:

1. an initial prompt;
2. a learner response;
3. an identified evidence need;
4. a targeted Socratic follow-up;
5. a second learner response;
6. an updated understanding map;
7. a faculty-facing evidence snapshot.

The demonstration may use deterministic or simulated outputs, but it must clearly distinguish the pedagogical decision from the language-provider function.

## Phase 2 — Provider proof of concept

**Goal:** connect a sandboxed institution-approved provider through a narrow adapter.

Requirements:

- no credentials in client-side code;
- schema-constrained requests and responses;
- validation and safe failure behavior;
- fictional or approved sandbox data only;
- model and request audit metadata;
- deterministic fallback for the demonstration.

## Phase 3 — Controlled institutional pilot

**Goal:** evaluate the educational workflow with a small approved population.

Requirements include authentication, role-based access, data-retention rules, accessibility testing, audit logs, faculty training, learner disclosure, support ownership, and defined evaluation measures.

## Phase 4 — Optional institutional integration

Potential capabilities after educational and governance validation:

- LMS launch through an approved standard;
- assignment and roster context;
- faculty dashboard and report export;
- institution-approved storage;
- optional faculty-confirmed grade workflow;
- aggregate pilot analytics.

## Success measures

A pilot should evaluate more than technical completion. Possible measures include:

- whether the dialogue elicits evidence not visible in the initial submission;
- whether faculty can understand and verify the evidence snapshot;
- whether follow-up questions align with course objectives;
- whether the system identifies uncertainty without overstating conclusions;
- learner and faculty accessibility;
- time required for faculty review;
- consistency across equivalent learner responses;
- incidence and handling of unsupported model output.
