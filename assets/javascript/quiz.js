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
    let resultImage;
    let careerlabel;
    if (score>=80){
        resultText = "are highly technical with a flair for finding and implementing solutions for everyday problems. It is very likely that a highly technical role within an organisation would suit your aptitudes. Possible career opportunities for you in Tech could include:</p>";
        careerlabel = "Problem Solver";
        resultImage ="../assets/images/high-tech-role.jpg";
        careers = ["Software Developer","Data Scientist","Full Stack engineer","Mobile & App developer","Cloud Engineer"];
    }
    else if(score>=60 && score<80){
        resultText = "are quiet technical with high degree of creativity who collaborate with multiple different stakeholders. It is highly likely that roles with this focus within an organisation would suit your aptitudes. Possible career opportunities for you in Tech could include:";
        careerlabel = "Solution Developer";
        resultImage ="../assets/images/solution-developer.jpg";
        careers = ["Web Designer","Front End Developer","Cybersecurity Specialist","Systems/Cloud architect","IT administrator"];
    }
    else if(score>=40 && score<60){
        resultText = "have technical skills but their day to day tasks involve a lot of analysis and collaboration with others. It is highly likely that roles with this focus within an organisation would suit your aptitudes. Possible career opportunities for you in Tech could include:";
        careerlabel = "Enthusiastic Collaborator";
        resultImage ="../assets/images/collaborator.jpg";
        careers = ["Technical Support", "IT Analyst", "Software Tester(QA)", "Account Manager", "Conversion Rate Optimiser(CRO)"];
    }
    else if(score>0 && score<40){
        resultText = "do not require much technical skills as their day to day tasks take a more strategic focus and may involve a lot of interaction & colloaboration with clients, customers and other stakeholders. It is highly likely that roles with this focus within an organisation would suit your aptitudes. Possible career opportunities for you in Tech could include:";
        careerlabel = "Strategic Supporter";
        resultImage ="../assets/images/heros.jpg";
        careers = ["Project Management", "Software Sales", "Customer Support", "Content Writer", "Digital Manager"];
    }
    else{
        resultText = "Error compiling results";
    }
    quizContainer.classList.add("hide");
    console.log(score);
    resultsArea.innerHTML=`<h2>Assessment Completed!</h2><p>Thank you for participating ${quizName}.</p>
    <h3>Based on the responses to the assessment, you are a <span style="color:#9433D6;"><u>${careerlabel}</u></span>.</h3> 
    <img class="resultImg" alt="Tech Person at Work" width=100% src="${resultImage}"/>
    <p>${careerlabel}'s ${resultText}</p>
    <ul><li>${careers[0]}</li><li>${careers[1]}</li><li>${careers[2]}</li><li>${careers[3]}</li><li>${careers[4]}</li></ul>
    <p>Explore these careers and more on the Grad Ireland <a target="_blank" href="https://gradireland.com/careers-advice/job-descriptions">website. </a>Get started on your journey to a career in Tech today!</p>
    `;
    
}