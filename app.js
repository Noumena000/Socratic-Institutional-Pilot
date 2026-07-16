const views = [...document.querySelectorAll('.demo-view')];
const steps = [...document.querySelectorAll('#step-list li')];
const titleEl = document.querySelector('#view-title');
const kickerEl = document.querySelector('#view-kicker');
const resetButton = document.querySelector('#reset-demo');
const restartButton = document.querySelector('#restart-demo');
const nextTurnButton = document.querySelector('#next-turn');
const replayButton = document.querySelector('#replay-dialogue');
const openReviewButton = document.querySelector('#open-review');
const dialogueEl = document.querySelector('#dialogue');
const decisionEl = document.querySelector('#decision-panel');
const evidenceEl = document.querySelector('#evidence-bars');
const turnCountEl = document.querySelector('#turn-count');

const viewMeta = [
  ['Faculty workspace', 'Assessment setup'],
  ['Learner workspace', 'Assessment launch'],
  ['Structured dialogue', 'Live evidence collection'],
  ['Faculty workspace', 'Evidence portfolio'],
  ['Technical architecture', 'Provider boundary']
];

const turns = [
  {
    messages: [
      ['Socratic coach', 'Can an argument be valid even when its conclusion is false? Explain your answer.', 'system'],
      ['Fictional learner', 'Yes. Validity is about whether the conclusion follows from the premises, not whether the premises are actually true.', 'learner']
    ],
    decision: {
      'Current objective': 'Distinguish validity from factual truth.',
      'Observed evidence': 'Definition stated accurately.',
      'Missing evidence': 'Application to a novel argument.',
      'Pedagogical move': 'Request an example.'
    },
    evidence: { Definition: 78, Distinction: 62, Application: 18, Revision: 0 }
  },
  {
    messages: [
      ['Evidence need', 'The learner states the distinction, but has not yet demonstrated it through an example.', 'analysis'],
      ['Socratic coach', 'Construct a valid argument with at least one false premise and explain why it remains valid.', 'system'],
      ['Fictional learner', 'All planets are made of glass. Earth is a planet. Therefore, Earth is made of glass. The first premise is false, but the conclusion follows if both premises are assumed.', 'learner']
    ],
    decision: {
      'Current objective': 'Apply validity independently of premise truth.',
      'Observed evidence': 'A structurally valid example is supplied.',
      'Missing evidence': 'Explicit distinction between validity and soundness.',
      'Pedagogical move': 'Ask for conceptual comparison.'
    },
    evidence: { Definition: 90, Distinction: 76, Application: 88, Revision: 0 }
  },
  {
    messages: [
      ['Socratic coach', 'How would your example change if the argument were sound rather than merely valid?', 'system'],
      ['Fictional learner', 'It would need to remain valid, but its premises would also need to be true. My example is valid but unsound because its first premise is false.', 'learner'],
      ['Decision snapshot', 'The learner distinguishes validity from soundness and applies the distinction in a novel example. Faculty review is still required.', 'analysis']
    ],
    decision: {
      'Current objective': 'Integrate validity and soundness.',
      'Observed evidence': 'Definition, distinction, and application demonstrated.',
      'Missing evidence': 'Optional transfer to another unfamiliar case.',
      'Pedagogical move': 'Stop and prepare faculty evidence.'
    },
    evidence: { Definition: 96, Distinction: 94, Application: 92, Revision: 0 }
  }
];

let currentView = 0;
let currentTurn = 0;

function showView(index) {
  currentView = index;
  views.forEach((view, i) => {
    const active = i === index;
    view.hidden = !active;
    view.classList.toggle('active', active);
  });
  steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
    step.classList.toggle('complete', i < index);
  });
  kickerEl.textContent = viewMeta[index][0];
  titleEl.textContent = viewMeta[index][1];
  document.querySelector('#pilot').scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (index === 2 && dialogueEl.childElementCount === 0) renderTurn(0, true);
}

function createMessage([role, text, type]) {
  const article = document.createElement('article');
  article.className = `message ${type}`;
  const label = document.createElement('strong');
  label.textContent = role;
  const body = document.createElement('span');
  body.textContent = text;
  article.append(label, body);
  return article;
}

function renderDecision(decision) {
  decisionEl.replaceChildren();
  Object.entries(decision).forEach(([label, value]) => {
    const row = document.createElement('div');
    const dt = document.createElement('dt');
    const dd = document.createElement('dd');
    dt.textContent = label;
    dd.textContent = value;
    row.append(dt, dd);
    decisionEl.append(row);
  });
}

function renderEvidence(evidence) {
  evidenceEl.replaceChildren();
  Object.entries(evidence).forEach(([label, value]) => {
    const row = document.createElement('div');
    row.className = 'evidence-row';
    const header = document.createElement('header');
    const name = document.createElement('strong');
    const score = document.createElement('span');
    name.textContent = label;
    score.textContent = value === 0 ? 'Not observed' : `${value}%`;
    header.append(name, score);
    const track = document.createElement('div');
    track.className = 'track';
    const fill = document.createElement('div');
    fill.className = 'fill';
    track.append(fill);
    row.append(header, track);
    evidenceEl.append(row);
    requestAnimationFrame(() => { fill.style.width = `${value}%`; });
  });
}

function renderTurn(index, replace = false) {
  currentTurn = index;
  if (replace) dialogueEl.replaceChildren();
  turns[index].messages.forEach(message => dialogueEl.append(createMessage(message)));
  renderDecision(turns[index].decision);
  renderEvidence(turns[index].evidence);
  turnCountEl.textContent = `Turn ${index + 1} of ${turns.length}`;
  const finalTurn = index === turns.length - 1;
  nextTurnButton.disabled = finalTurn;
  nextTurnButton.textContent = finalTurn ? 'Dialogue complete' : 'Continue dialogue';
  openReviewButton.disabled = !finalTurn;
}

function resetDemo() {
  currentTurn = 0;
  dialogueEl.replaceChildren();
  decisionEl.replaceChildren();
  evidenceEl.replaceChildren();
  nextTurnButton.disabled = false;
  nextTurnButton.textContent = 'Continue dialogue';
  openReviewButton.disabled = true;
  showView(0);
}

document.querySelectorAll('.advance').forEach(button => {
  button.addEventListener('click', () => showView(Number(button.dataset.next)));
});

steps.forEach(step => {
  step.querySelector('button').addEventListener('click', () => {
    const requested = Number(step.dataset.step);
    if (requested <= currentView || steps[requested].classList.contains('complete')) showView(requested);
  });
});

nextTurnButton.addEventListener('click', () => {
  if (currentTurn < turns.length - 1) renderTurn(currentTurn + 1);
});
replayButton.addEventListener('click', () => renderTurn(0, true));
resetButton.addEventListener('click', resetDemo);
restartButton.addEventListener('click', resetDemo);

showView(0);
