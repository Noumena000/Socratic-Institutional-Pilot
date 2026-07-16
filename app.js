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
const traceEl = document.querySelector('#decision-trace');
const turnCountEl = document.querySelector('#turn-count');

const viewMeta = [
  ['Curriculum workspace', 'Module overview'],
  ['Faculty configuration', 'Knowledge pack'],
  ['Learner workspace', 'Assessment launch'],
  ['Structured dialogue', 'Educational decision trace'],
  ['Faculty workspace', 'Evidence portfolio'],
  ['Technical architecture', 'Provider boundary']
];

const turns = [
  {
    messages: [
      ['Socratic coach', 'State the Utilitarian recommendation and explain the principle that supports it.', 'system'],
      ['Fictional learner', 'The hospital should choose the option that produces the greatest overall benefit. Utilitarianism evaluates actions by their consequences and asks us to consider everyone affected.', 'learner']
    ],
    decision: {
      'Current objective': 'Explain and apply the Utilitarian principle.',
      'Observed evidence': 'Consequences and impartial consideration are identified.',
      'Missing evidence': 'How competing benefits are compared.',
      'Pedagogical move': 'Request clarification of utility.'
    },
    evidence: { Definition: 72, Application: 58, Objection: 0, Revision: 0 },
    trace: 'Objective → principle stated → comparison method unclear → clarify utility'
  },
  {
    messages: [
      ['Socratic coach', 'What would count as the greatest overall benefit here, and why is helping more people not automatically the same as maximizing utility?', 'system'],
      ['Fictional learner', 'The number of people matters, but so do the size and likelihood of the benefits. Several small benefits might not outweigh saving one life, so the outcomes must be compared rather than counted mechanically.', 'learner']
    ],
    decision: {
      'Current objective': 'Distinguish aggregate utility from simple head counting.',
      'Observed evidence': 'Magnitude, likelihood, and distribution of benefit are considered.',
      'Missing evidence': 'Response to a rights or justice objection.',
      'Pedagogical move': 'Introduce a counterexample involving individual rights.'
    },
    evidence: { Definition: 88, Application: 82, Objection: 20, Revision: 0 },
    trace: 'Clarification → misconception avoided → theory represented fairly → introduce objection'
  },
  {
    messages: [
      ['Socratic coach', 'Suppose the greatest total benefit requires imposing a serious involuntary burden on one patient. Would maximizing utility still justify that choice?', 'system'],
      ['Fictional learner', 'A strict act Utilitarian might say yes if the total benefit is genuinely greater, but that exposes a serious objection: the theory can permit unfair treatment or sacrifice individual rights.', 'learner']
    ],
    decision: {
      'Current objective': 'Evaluate a justice or rights objection.',
      'Observed evidence': 'The learner identifies a conflict between utility and individual rights.',
      'Missing evidence': 'Whether the initial recommendation should be defended or revised.',
      'Pedagogical move': 'Request qualified revision.'
    },
    evidence: { Definition: 92, Application: 88, Objection: 86, Revision: 25 },
    trace: 'Counterexample → rights conflict recognized → unresolved commitment → request revision'
  },
  {
    messages: [
      ['Socratic coach', 'Revise or defend your original recommendation in light of that objection.', 'system'],
      ['Fictional learner', 'I would qualify my answer. Consequences remain central, but the hospital should not treat aggregate benefit as the only consideration without safeguards for rights and fair procedures. This is a limitation of simple act Utilitarian reasoning.', 'learner'],
      ['Decision snapshot', 'Required evidence has been observed. Prepare a transcript-linked portfolio for faculty review.', 'analysis']
    ],
    decision: {
      'Current objective': 'Defend or revise the initial judgment.',
      'Observed evidence': 'The learner qualifies the conclusion and identifies a limitation.',
      'Missing evidence': 'Optional transfer to another ethical framework.',
      'Pedagogical move': 'Stop and prepare faculty evidence.'
    },
    evidence: { Definition: 95, Application: 92, Objection: 93, Revision: 90 },
    trace: 'Revision requested → qualification supplied → stopping conditions met → faculty review'
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
  if (index === 3 && dialogueEl.childElementCount === 0) renderTurn(0, true);
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

function renderTrace(index) {
  traceEl.replaceChildren();
  turns.slice(0, index + 1).forEach((turn, i) => {
    const item = document.createElement('li');
    const marker = document.createElement('span');
    marker.textContent = String(i + 1);
    const text = document.createElement('p');
    text.textContent = turn.trace;
    item.append(marker, text);
    traceEl.append(item);
  });
}

function renderTurn(index, replace = false) {
  currentTurn = index;
  if (replace) dialogueEl.replaceChildren();
  turns[index].messages.forEach(message => dialogueEl.append(createMessage(message)));
  renderDecision(turns[index].decision);
  renderEvidence(turns[index].evidence);
  renderTrace(index);
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
  traceEl.replaceChildren();
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
    if (requested <= currentView || step.classList.contains('complete')) showView(requested);
  });
});

nextTurnButton.addEventListener('click', () => {
  if (currentTurn < turns.length - 1) renderTurn(currentTurn + 1);
});
replayButton.addEventListener('click', () => renderTurn(0, true));
resetButton.addEventListener('click', resetDemo);
restartButton.addEventListener('click', resetDemo);

showView(0);