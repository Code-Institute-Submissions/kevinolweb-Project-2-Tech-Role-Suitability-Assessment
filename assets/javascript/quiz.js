/*jshint esversion: 6 */
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
    {
        question:"What kind of job best suits you?",
        answers:{
            answer_a:"I prefer a job which does not require further study",
            answer_b:"I love a job where I do not have all the answers and have to learn new skills",
            answer_c:"I like to learn but further learning should be paid by my employer",
            answer_d:"I want a job which is challenging and requires continual learning",
        },
        highest_score:"b",
        second_highest_score:"d",
        third_highest_score:"c",
        fourth_highest_score:"a"
    },
    {
        question:"Which 3 words would people use to describe you?",
        answers:{
            answer_a:"Hardworking, detail oriented & a problem solver",
            answer_b:"Good communicator, great delegator & a creative thinker ",
            answer_c:"Passionate, patient and a continual learner",
            answer_d:"Results oriented, driven & likes to work on your own",
        },
        highest_score:"a",
        second_highest_score:"d",
        third_highest_score:"b",
        fourth_highest_score:"c"
    },
    {
        question:"Which kind of work environment best suits you?",
        answers:{
            answer_a:"I like to work on my own initiative",
            answer_b:"I prefer to be told what exactly I need to do",
            answer_c:"I like regular colleague support to complete a task",
            answer_d:"I liaise with my team and manager to get work done",
        },
        highest_score:"a",
        second_highest_score:"d",
        third_highest_score:"c",
        fourth_highest_score:"b"
    },
    {
        question:"What would your dream job entail?",
        answers:{
            answer_a:"Managing projects and meeting clients",
            answer_b:"Delivering presentations and selling products/services",
            answer_c:"Sitting behind a screen coding and solving bugs/problems",
            answer_d:"Chatting to customers and helping solve their problems",
        },
        highest_score:"c",
        second_highest_score:"a",
        third_highest_score:"b",
        fourth_highest_score:"d"
    },
    {
        question:"What is your attitude to stress?",
        answers:{
            answer_a:"I get stressed easily and prefer a low stress role",
            answer_b:"I don’t mind a little stress ",
            answer_c:"The stress of an upcoming deadline motivates me",
            answer_d:"I thrive in stressful environments",
        },
        highest_score:"d",
        second_highest_score:"c",
        third_highest_score:"b",
        fourth_highest_score:"a"
    },
    {
        question:"Please select the option below which best represents you:",
        answers:{
            answer_a:"I am a real people person",
            answer_b:"I love gadgets, technology and am a bit of a 'nerd'",
            answer_c:"I love intellectual and creative outlets",
            answer_d:"I have a wide range of hobbies",
        },
        highest_score:"b",
        second_highest_score:"c",
        third_highest_score:"a",
        fourth_highest_score:"d"
    },
    {
        question:"A colleague has a problem with the laptop, how would you help:",
        answers:{
            answer_a:"I would ping them an email with the user manual",
            answer_b:"I would give them a call to find out more",
            answer_c:"I’d call over to their desk and ask if they need my help",
            answer_d:"I’d have a quick look online to find anything to help them",
        },
        highest_score:"c",
        second_highest_score:"d",
        third_highest_score:"b",
        fourth_highest_score:"a"
    },
];

let quizContainer = document.getElementById("quiz");
let question_text = document.getElementById("quiz-question");
let a_text = document.getElementById("a-label");
let b_text = document.getElementById("b-label");
let c_text = document.getElementById("c-label");
let d_text = document.getElementById("d-label");
let nextbtn = document.getElementById("next-btn");
let answers = document.querySelectorAll(".answer");
let resultsArea = document.getElementById("results-area");
let errorText = document.getElementById("error-text");
let startButton =document.getElementById("start-btn");
let entryScreen =document.getElementById("entry-screen");
let nameBlankError = document.getElementById("error-nametext");
let questionNumber = document.getElementById("quiz-question-number");

let currentQuestion = 0;
let score = 0;
let quizName="";

startButton.addEventListener("click",function(){
    let firstName = document.getElementById("fname");
    quizName += firstName.value;
    if (quizName.length!=0){
        runGame();
    }
    else{
        nameBlankError.style.display="block";
    }
});

function runGame(){
    displayQuestion();
    entryScreen.style.display="none";
    quizContainer.style.display="block";
}

function displayQuestion(){
    deSelectAnswer();
    questionNumber.innerText = "Question " + (currentQuestion+1) + " of " + quizData.length;
    question_text.innerText = quizData[currentQuestion].question;
    a_text.innerText = quizData[currentQuestion].answers.answer_a;
    b_text.innerText = quizData[currentQuestion].answers.answer_b;
    c_text.innerText = quizData[currentQuestion].answers.answer_c;
    d_text.innerText = quizData[currentQuestion].answers.answer_d;

    if (currentQuestion===quizData.length-1){
        nextbtn.innerText="Finish";
        nextbtn.style.backgroundColor="#ED4558";
    }
    
}

function deSelectAnswer(){
    answers.forEach(ans=>ans.checked=false);
}

function selectAnswer(){
    let userAnswer;
    answers.forEach(selAns=>{
    if(selAns.checked){
        userAnswer = selAns.id;
    }
    });
    return userAnswer;
}

nextbtn.addEventListener("click", function(){
    let userAnswer = selectAnswer();
    if (userAnswer===undefined || userAnswer===null){
        errorText.style.display="block";
    }
    else{
        calculateScore(userAnswer);
        errorText.style.display="none";
        currentQuestion++;
        if (currentQuestion<quizData.length){
            runGame();
        }
        
        else{
            quizContainer.style.display="none";
            showResult();
        }
    }
});

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
    let resultText;
    if (score>=80){
        resultText = "You are stronly suited to a technical role based on your answers. Careers like a software developer, Data Scientist, stack engineer, App developer etc. could await you. Get started on the coding journey today!";
    }
    else if(score>=60 && score<80){
        resultText = "Your answers indicate that you could be well suited to a technical role which also allows for creativity and a lot of collaboration. Careers like a Web Designer, Front end developer, systems architect, IT administrator etc. could await you. Get started on the coding journey today!";
    }
    else if(score>=40 && score<60){
        resultText = "Your answers indicate that you could be well suited to a role which is a little technical but mostly allows you to demonstrate a lot of creativity and collaborate with others. Careers like Graphic Design, Technical Support, IT Analyst, QA, Account Manager etc. could await you. Get started on your Tech journey today!";
    }
    else if(score>0 && score<40){
        resultText = "Your answers indicate that you could be well suited to a role which is involves interaction with a lot of different stakholders and also allows for creativity and doesn't require too much technical knowledge. Careers like Project Management, Software sales, customer support, content writing etc could await you. Get started on your Tech journey today!";
    }
    else{
        resultText = "Error compiling results";
    }
    quizContainer.classList.add("hide");
    resultsArea.innerHTML=`<p>Quiz Over</p><br/><p>Thank you for participating ${quizName}. You scored ${score}.</p><p>${resultText}`;
    console.log(score);
}