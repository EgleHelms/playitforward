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
    question: "What is the oldest city in the world??",
    image: "",
    a: "Damaskus",
    b: "Jarusalem",
    c: "Jericho",
    d: "Athens",
    correct: "a"
},

{
  question: "What is the flattest continent?",
  image: "",
  a: "Africa",
  b: "Australia",
  c: "South America",
  d: "Antarctica",
  correct: "b"
},

{
  question: "What is the largest country in South America?",
  image: "",
  a: "Columbia",
  b: "Argentina",
  c: "Brazil",
  d: "Peru",
  correct: "c"
},

{
  question: "What is the deepest point in Earth's oceans?",
  image: "",
  a: "Java Trench",
  b: "Tonga Trench",
  c: "Marina Trench",
  d: "Eurasian Basin",
  correct: "c"
},
{
  question: "What is the smallest independent country on Earth?",
  image: "",
  a: "Vatican City",
  b: "Grenada",
  c: "Monaco",
  d: "Nuaru",
  correct: "a"
},
{
  question: "What continent contains the most fresh water?",
  image: "",
  a: "Africa",
  b: "Antarctica",
  c: "North America",
  d: "Asia",
  correct: "b"
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

    if (score === 3){
      modalShow()
    }

    if (score === 7) {
      modalShow2()
    }
    
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <p id="spec">You donated 2 books to children who need it!</p>
            <button id="try_again" onclick="location.reload()">Try again</button>`
    }
  }
});

const modal = document.getElementById("lab-slide-bottom-popup");
function modalShow () {
  modal.classList.remove("hide");
  modal.classList.add("style");
  setTimeout(function(){
    modal.classList.add("hide");
    modal.classList.remove("style");
  }, 5000)
}

const modal2 = document.getElementById("lab-slide-bottom-popup2");
function modalShow2 () {
  modal2.classList.remove("hide");
  modal2.classList.add("style");
  setTimeout(function(){
    modal2.classList.add("hide");
    modal2.classList.remove("style");
  }, 5000)
}