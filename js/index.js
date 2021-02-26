const quizData = [
  {
      question: "What is Earth's largest continent?",
      image: "",
      a: "Europe",
      b: "Antarctica",
      c: "Africa",
      d: "Asia",
      correct: "d"
  },

  {
      question: "What country has the most natural lakes?",
      image: "",
      a: "Unites States",
      b: "Canada",
      c: "Australia",
      d: "India",
      correct: "b"
  },

  {
      question: "What is the only sea without any coasts?",
      image: "",
      a: "Celebes Sea",
      b: "Medeterranean Sea",
      c: "Adriatic Sea",
      d: "Saragaso Sea",
      correct: "d"
  },

  {
      question: "Which African nation has the most pyramids?",
      image: "",
      a: "Lybia",
      b: "Egypt",
      c: "Algeria",
      d: "Sudan",
      correct: "d"
  },

  {
    question: "Which African nation has the most pyramids?",
    image: "",
    a: "Lybia",
    b: "Egypt",
    c: "Algeria",
    d: "Sudan",
    correct: "d"
},

{
  question: "Which African nation has the most pyramids?",
  image: "",
  a: "Lybia",
  b: "Egypt",
  c: "Algeria",
  d: "Sudan",
  correct: "d"
},

{
  question: "Which African nation has the most pyramids?",
  image: "",
  a: "Lybia",
  b: "Egypt",
  c: "Algeria",
  d: "Sudan",
  correct: "d"
},

{
  question: "Which African nation has the most pyramids?",
  image: "",
  a: "Lybia",
  b: "Egypt",
  c: "Algeria",
  d: "Sudan",
  correct: "d"
},
{
  question: "Which African nation has the most pyramids?",
  image: "",
  a: "Lybia",
  b: "Egypt",
  c: "Algeria",
  d: "Sudan",
  correct: "d"
},
{
  question: "Which African nation has the most pyramids?",
  image: "",
  a: "Lybia",
  b: "Egypt",
  c: "Algeria",
  d: "Sudan",
  correct: "d"
}
]

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};
loadQuiz();

const popupno = document.getElementById("popup-no");
const popupyes = document.getElementById("popup-yes");
const progress = document.getElementById("progress");
const progNum = document.querySelector(".progress > p > span");

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score+=1;
    currentQuiz+=1;
    progress.value = score;
    progNum.innerHTML = `${score}/${quizData.length}`

    if (score === 2){
      modalShow()
    }
    
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h1>Nice Work!<h1>
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Choose anoter quiz</button>
            <button id="try_again" onclick="location.reload()">Try again</button>`
    }
  }
});

const modal = document.getElementById("lab-slide-bottom-popup");
function modalShow () {
  modal.classList.remove("hide");
  modal.classList.add("style");
}