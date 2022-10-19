const quizData = [
    {
        question:"Which of the below represents how you like to work?",
        answers:{
            answer_a:"I like to work by myself",
            answer_b:"I like to work by myself while also collaborating with others",
            answer_c:"I mostly prefer to work with other people every day",
            answer_d:"I don’t like working on my own ",
        },
        highest_score:"b",
        second_highest_score:"a",
        third_highest_score:"c",
        fourth_highest_score:"d"
    },
    {
        question:"Are you good at Maths and numerics/statistics?",
        answers:{
            answer_a:"I hate Maths and statistics ",
            answer_b:"I am relatively good at Maths but enjoy more creative pursuits",
            answer_c:"I enjoy Maths and never forget a date ",
            answer_d:"Maths and statistics come easy to me and I love to open up an excel sheet",
        },
        highest_score:"d",
        second_highest_score:"c",
        third_highest_score:"b",
        fourth_highest_score:"a"
    },
    {
        question:"Which of the following best describes your attitude to work?",
        answers:{
            answer_a:"I love structured and detailed work which is goal oriented",
            answer_b:"I prefer variety at work and like to do different things",
            answer_c:"I get bored easily and like to know what is expected of me",
            answer_d:"I like to schedule my day so I can stay on task which also allow for pivots",
        },
        highest_score:"a",
        second_highest_score:"d",
        third_highest_score:"b",
        fourth_highest_score:"c"
    },
]

let quizContainer = document.getElementById("quiz")
let question_text = document.getElementById("quiz-question")
let a_text = document.getElementById("a-label")
let b_text = document.getElementById("b-label")
let c_text = document.getElementById("c-label")
let d_text = document.getElementById("d-label")
let nextbtn = document.getElementById("next-btn")
let answers = document.querySelectorAll(".answer")
let resultsArea = document.getElementById("results-area")
let errorText = document.getElementById("error-text")
let startButton =document.getElementById("start-btn")
let entryScreen =document.getElementById("entry-screen")
let nameBlankError = document.getElementById("error-nametext")


let currentQuestion = 0;
let score = 0;
let quizName="";

startButton.addEventListener("click",function(){
    let firstName = document.getElementById("fname")
    quizName += firstName.value
    if (quizName.length!=0){
        runGame()
    }
    else{
        nameBlankError.style.display="block";
    }
})

function runGame(){
    displayQuestion()
    entryScreen.style.display="none"
    quizContainer.style.display="block"
}

function displayQuestion(){
    deSelectAnswer()
    question_text.innerText = quizData[currentQuestion].question
    a_text.innerText = quizData[currentQuestion].answers.answer_a
    b_text.innerText = quizData[currentQuestion].answers.answer_b
    c_text.innerText = quizData[currentQuestion].answers.answer_c
    d_text.innerText = quizData[currentQuestion].answers.answer_d

    if (currentQuestion===quizData.length-1){
        nextbtn.innerText="Finish";
        nextbtn.style.backgroundColor="red";
    }
    
}

function deSelectAnswer(){
    answers.forEach(ans=>ans.checked=false)
}

function selectAnswer(){
    let userAnswer
    answers.forEach(selAns=>{
    if(selAns.checked){
        userAnswer = selAns.id;
    }
    })
    return userAnswer
}

nextbtn.addEventListener("click", function(){
    let userAnswer = selectAnswer()
    console.log(userAnswer)
    if (userAnswer===undefined || userAnswer===null){
        errorText.style.display="block";
    }
    else{
        calculateScore(userAnswer);
        errorText.style.display="none";
        currentQuestion++
        if (currentQuestion<quizData.length){
            runGame()
        }
        
        else{
            quizContainer.style.display="none"
            showResult()
        }
    }
})

function calculateScore(theAnswer){
    if (theAnswer===quizData[currentQuestion].highest_score){
        score +=10;
    }
    else if(theAnswer===quizData[currentQuestion].second_highest_score){
        score +=7;
    }
    else if(theAnswer===quizData[currentQuestion].third_highest_score){
        score +=4;
    }
    else if(theAnswer===quizData[currentQuestion].fourth_highest_score){
        score +=1;
    }

}

function showResult(){
    let resultText
    if (score>15){
        resultText = "You can be a great developer"
    }
    else if(score<15){
        resultText = "You can be a great  just not a dev!"
    }
    else{
        resultText = "Error compiling results"
    }
    quizContainer.classList.add("hide")
    resultsArea.innerHTML=`<p>Quiz Over</p><br/><p>Thank you for participating ${quizName}. You scored ${score}.</p><p>${resultText}`;
    console.log(score)
}