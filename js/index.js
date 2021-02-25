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
console.log("bla")
loadQuiz();

const popupno = document.getElementById("popup-no");
const popupyes = document.getElementById("popup-yes");
const progress = document.getElementById("progress");

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score+=1;
    currentQuiz+=1;
    progress.value = score++
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>
        ` // Reload won't work in CodePen for security reasons;
    }
  }
});
