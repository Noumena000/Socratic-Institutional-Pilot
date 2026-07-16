const session = {
  prompt: "Can an argument be valid even when its conclusion is false? Explain your answer.",
  response: "Yes. Validity is about whether the conclusion follows from the premises, not whether the premises are actually true.",
  followUp: "Construct a valid argument with at least one false premise and explain why it remains valid.",
  followUpResponse: "All planets are made of glass. Earth is a planet. Therefore, Earth is made of glass. The first premise is false, but the conclusion follows if both premises are assumed.",
  analysis: "The learner distinguishes validity from factual truth and then applies the distinction in a new example. Revision has not yet been tested."
};

const evidence = [
  { dimension: "Definition", status: "Demonstrated", basis: "Distinguishes validity from factual truth.", turn: "Turn 1" },
  { dimension: "Application", status: "Demonstrated", basis: "Constructs a valid argument containing a false premise.", turn: "Turn 2" },
  { dimension: "Revision", status: "Not yet observed", basis: "The current exchange did not require correction or revision.", turn: "—" }
];

const dialogueEl = document.querySelector("#dialogue");
const evidenceEl = document.querySelector("#evidence");
const startButton = document.querySelector("#start-demo");
const resetButton = document.querySelector("#reset-demo");
let running = false;

function message(role, text, className) {
  const item = document.createElement("div");
  item.className = `message ${className}`;
  const label = document.createElement("strong");
  label.textContent = role;
  const body = document.createElement("span");
  body.textContent = text;
  item.append(label, body);
  return item;
}

function evidenceCard(item) {
  const card = document.createElement("article");
  card.className = "evidence-card";
  const header = document.createElement("header");
  const title = document.createElement("strong");
  title.textContent = item.dimension;
  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = item.status;
  header.append(title, badge);
  const basis = document.createElement("p");
  basis.textContent = `${item.basis} Evidence source: ${item.turn}.`;
  card.append(header, basis);
  return card;
}

function wait(ms) {
  return new Promise(resolve => window.setTimeout(resolve, ms));
}

async function startDemo() {
  if (running) return;
  running = true;
  startButton.disabled = true;
  dialogueEl.replaceChildren();
  evidenceEl.replaceChildren();

  const steps = [
    ["Socratic coach", session.prompt, "system"],
    ["Fictional learner", session.response, "learner"],
    ["Evidence need", "The distinction is stated, but it has not yet been demonstrated through an example.", "analysis"],
    ["Socratic coach", session.followUp, "system"],
    ["Fictional learner", session.followUpResponse, "learner"],
    ["Decision snapshot", session.analysis, "analysis"]
  ];

  for (let index = 0; index < steps.length; index += 1) {
    const [role, text, className] = steps[index];
    dialogueEl.append(message(role, text, className));
    if (index === 1) evidenceEl.append(evidenceCard(evidence[0]));
    if (index === 4) evidenceEl.append(evidenceCard(evidence[1]));
    if (index === 5) evidenceEl.append(evidenceCard(evidence[2]));
    await wait(650);
  }

  running = false;
  startButton.disabled = false;
  startButton.textContent = "Replay fictional dialogue";
}

function resetDemo() {
  running = false;
  startButton.disabled = false;
  startButton.textContent = "Start fictional dialogue";
  dialogueEl.innerHTML = '<p class="empty-state">Select “Start fictional dialogue” to reveal the sample assessment.</p>';
  evidenceEl.innerHTML = '<p class="empty-state">Evidence will appear as the fictional dialogue progresses.</p>';
}

startButton.addEventListener("click", startDemo);
resetButton.addEventListener("click", resetDemo);
