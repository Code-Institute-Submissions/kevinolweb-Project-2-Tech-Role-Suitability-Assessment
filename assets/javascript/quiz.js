const quizData = [
    {
        question:"Which of the below represents how you like to work?",
        answer_a:"I like to work by myself",
        answer_b:"I like to work by myself while also collaborating with others",
        answer_c:"I mostly prefer to work with other people every day",
        answer_d:"I don’t like working on my own ",
        highest_score:"b",
        second_highest_score:"a",
        third_highest_score:"c",
        fourth_highest_score:"d"
    }
]

let question_text = document.getElementById("quiz-question")
let a_text = document.getElementById("a-label")
let b_text = document.getElementById("b-label")
let c_text = document.getElementById("c-label")
let d_text = document.getElementById("d-label")


let currentQuestion = 0;
let score = 0;

document.addEventListener("DOMContentLoaded",runGame)

function runGame(){
    displayQuestion()
}

function displayQuestion(){
    question_text.innerText = quizData[currentQuestion].question
    a_text.innerText = quizData[currentQuestion].answer_a
    b_text.innerText = quizData[currentQuestion].answer_b
    c_text.innerText = quizData[currentQuestion].answer_c
    d_text.innerText = quizData[currentQuestion].answer_d
}