const quizData = [{
    question: "Which of the following is a primary organ of the female reproductive system?",
    a: "vagina",
    b: "penis",
    c: "testes",
    d: "ovary",
    correct: "d",
},
{
    question: "In the female reproductive organ, the foetus develops in _______",
    a: "ovary",
    b: "vagina",
    c: "uterus",
    d: "none",
    correct: "c",
},
{
    question: "my dad's name is",
    a: "aryan",
    b: "mummi ne btya nhi",
    c: "nhi pta",
   
    correct: "d",
},

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
let score=document.getElementsByClassName("container")[0]
score.innerHTML = `
    <div class="col">
        <h3 class="w-100"> your score is ${correct}/${total} </h3>
    </div>`

score.classList.add("scores")
}
loadQuestion(index);
//https://aryan10092.github.io/quiz-js/