export class InstitutionalAIProviderMock {
  constructor() {
    this.name = "Mock institution-approved AI provider";
  }

  async analyzeResponse({ learnerResponse, targetConcept }) {
    if (!learnerResponse || !targetConcept) {
      throw new Error("learnerResponse and targetConcept are required");
    }

    return {
      provider: this.name,
      simulated: true,
      reasoningEvent: {
        targetConcept,
        demonstratedMoves: ["definition", "distinction"],
        unresolvedEvidence: ["application"],
        confidenceLabel: "moderate",
        sourceText: learnerResponse
      },
      recommendedPedagogicalMove: {
        move: "request-example",
        rationale: "The learner states the distinction but has not yet demonstrated it in a constructed case."
      }
    };
  }
}
