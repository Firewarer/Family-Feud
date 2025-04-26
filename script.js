// 1) Fast Money question pool (pick 5 of these)
const fastMoneyPool = [
  { prompt: "Name something you do when you wake up", answers:[
      {text:"Brush teeth",points:35},{text:"Shower",points:25},
      {text:"Check phone",points:20},{text:"Eat breakfast",points:15},
      {text:"Stretch",points:5}
  ]},
  { prompt: "Name a popular pizza topping", answers:[
      {text:"Pepperoni",points:40},{text:"Mushrooms",points:25},
      {text:"Onions",points:20},{text:"Sausage",points:10},
      {text:"Bacon",points:5}
  ]},
  { prompt: "Name something you bring to the beach", answers:[
      {text:"Towel",points:30},{text:"Sunscreen",points:25},
      {text:"Swimsuit",points:20},{text:"Umbrella",points:15},
      {text:"Cooler",points:10}
  ]},
  { prompt: "Name a fruit that is yellow", answers:[
      {text:"Banana",points:50},{text:"Lemon",points:30},
      {text:"Pineapple",points:15},{text:"Mango",points:4},
      {text:"Papaya",points:1}
  ]},
  { prompt: "Name a household chore", answers:[
      {text:"Dishes",points:40},{text:"Vacuuming",points:30},
      {text:"Laundry",points:20},{text:"Dusting",points:7},
      {text:"Mopping",points:3}
  ]},
      { prompt: "Name a for question 6", answers:[
      {text:"D",points:40},{text:"V",points:30},
      {text:"L",points:20},{text:"D",points:7},
      {text:"M",points:3}
  ]},
    { prompt: "Name a for question 7", answers:[
      {text:"11111",points:40},{text:"4444",points:30},
      {text:"2222",points:20},{text:"5555",points:7},
      {text:"3333",points:3}
  ]},
    { prompt: "Name a for question 8", answers:[
      {text:"A",points:40},{text:"VD",points:30},
      {text:"B",points:20},{text:"E",points:7},
      {text:"C",points:3}
  ]}
];

// 2) State
let selectedQuestions = [];
let answerIndex       = 0;
let timeLeft          = 30;
let timerStarted      = false;
let revealedCount     = 0;
let timerInterval;

// 3) Audio elements (IDs in HTML)
const startSnd   = document.getElementById('start-sound');
const tickSnd    = document.getElementById('tick-sound');
const swooshSnd  = document.getElementById('swoosh-sound');
const upSnd      = document.getElementById('timesup-sound');
// Only ticking loops
tickSnd.loop = true;

// 4) DOM refs
const board       = document.getElementById('question-board');
const timerEl     = document.getElementById('timer');
const stopBtn     = document.getElementById('stop-btn');
const timesUpEl   = document.getElementById('times-up');
const answerBoard = document.getElementById('answer-board');
const currentQna  = document.getElementById('current-qna');
const nextBtn     = document.getElementById('next-btn');

// 5) Shuffle helper
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 6) Initialize round
function startGame() {
  selectedQuestions = shuffle([...fastMoneyPool]).slice(0,5);
  answerIndex       = 0;
  timeLeft          = 30;
  timerStarted      = false;
  revealedCount     = 0;

  timerEl.textContent     = timeLeft;
  stopBtn.classList.add('hidden');
  answerBoard.classList.add('hidden');
  timesUpEl.classList.add('hidden');
  document.body.classList.remove('flash-red');
  board.innerHTML = '';

  selectedQuestions.forEach((q,i) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'tile-wrapper';

    const qText = document.createElement('div');
    qText.className   = 'question-text hidden';
    qText.textContent = q.prompt;

    const box = document.createElement('div');
    box.className     = 'box';
    box.dataset.idx   = i;
    box.textContent   = `Box ${i+1}`;
    box.addEventListener('click', revealQuestion);

    wrapper.appendChild(qText);
    wrapper.appendChild(box);
    board.appendChild(wrapper);
  });
}

// 7) Reveal logic
function revealQuestion(e) {
  const box     = e.currentTarget;
  const wrapper = box.parentNode;
  const idx     = +box.dataset.idx;

  if (!timerStarted) startTimer();

  if (!box.classList.contains('revealed')) {
    box.classList.add('revealed');
    revealedCount++;

    // play swoosh, reveal text
    swooshSnd.currentTime = 0;
    swooshSnd.play();
    wrapper.querySelector('.question-text').classList.remove('hidden');

    // slide out box
    setTimeout(() => box.classList.add('slide-out'), 100);
    setTimeout(() => box.remove(), 600);

    if (revealedCount === 5) stopBtn.classList.remove('hidden');
  }
}

// 8) Timer logic
function startTimer() {
  timerStarted = true;
  startSnd.currentTime = 0;
  startSnd.play();
  setTimeout(() => tickSnd.play(), 500);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) finishRound();
  }, 1000);
}

// 9) Manual stop
stopBtn.addEventListener('click', () => {
  clearInterval(timerInterval);
  tickSnd.pause();
  finishRound();
});

// 10) End round
function finishRound() {
  clearInterval(timerInterval);
  tickSnd.pause();
  upSnd.currentTime = 0;
  upSnd.play();
  document.body.classList.add('flash-red');
  timesUpEl.classList.remove('hidden');

  setTimeout(() => {
    document.body.classList.remove('flash-red');
    timesUpEl.classList.add('hidden');
    board.innerHTML = '';
    stopBtn.classList.add('hidden');
    showAnswer();
  }, 1500);
}

// 11) Show answers
function showAnswer() {
  answerBoard.classList.remove('hidden');
  displayAnswer(answerIndex);
}
function displayAnswer(i) {
  const q = selectedQuestions[i];
  let html = `<h2>Question ${i+1}: ${q.prompt}</h2><ul>`;
  q.answers.forEach(a => html += `<li>${a.text} — ${a.points} pts</li>`);
  html += `</ul>`;
  currentQna.innerHTML = html;
}

// 12) Next nav
nextBtn.addEventListener('click', () => {
  answerIndex++;
  if (answerIndex < selectedQuestions.length) displayAnswer(answerIndex);
  else {
    nextBtn.disabled = true;
    nextBtn.textContent = "Done!";
  }
});

// 13) Start up
startGame();