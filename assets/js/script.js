var welcomeContainer = document.querySelector('.welcome');
var startBtn = document.querySelector('.startbtn');
var timerContainer = document.querySelector('.timer-container');
var timer = document.querySelector('.timer');
var questionContainer = document.querySelector('.question-container');
var questionText = document.querySelector('.question-text');
var answersContainer = document.querySelector('.answers-container');
var answerStatus = document.querySelector('.answer-status');
var endContainer = document.querySelector('.end-container');
var scoreDisplay = document.querySelector('.score-display');
var userInitial = document.querySelector('.user-initial');
var submitBtn = document.querySelector('.submit-btn');
var highscoreContainer = document.querySelector('#highscore-container');
var highscoreHeader = document.querySelector('.highscore-header');
var highscoreList = document.querySelector('.highscore-list');

var questionIndex =0;


var questions = [
    {
        question: 'Commonly used data type do NOT include:',
        options:['strings','booleans', 'alerts', 'numbers'],
        answer: 'alerts' 
    },
    {
        question: 'Arrays in JavaScript can be used to store:',
        options: ['booleans and numbers', 'arrays', 'strings', 'all of the above'],
        answer: 'all of the above'
    },
    {
        question: 'The condition in an if/else statement is enclosed with: ',
        options: ['parenthesis', 'quotes' ,'curly brackets', 'square brackets'],
        answer: 'parentheses'
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        options: ['commas', 'quotes' ,'curly brackets', 'parentheses'],
        answer: 'curly brackets'
    },
    {
        question: 'A very useful tool used for development and debugging for printing content to the debugger is:',
        options: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log'
    }
];

timerContainer.style.display='none';
questionContainer.style.display='none';
endContainer.style.display='none';

startBtn.addEventListener('click', function(){

    startQuiz();
})


function startQuiz (){
    welcomeContainer.style.display='none';
    questionContainer.style.display='block';
    timerContainer.style.display='block';
    setTimer();
    showQuestion(questionIndex);
}

var quizTime = 30;
function setTimer (){
    var timeTicking =setInterval(function (){
        quizTime--;
        timer.textContent=quizTime;

        if (quizTime ===0){
            clearInterval(timeTicking);
        }
    },1000)

}


function showQuestion (q){
    answersContainer.innerHTML='';
    questionText.textContent=questions[q].question;
    var options=questions[q].options;
    // console.log(answers);
    options.forEach(function(option){
        var optionBtn =document.createElement('button');
        optionBtn.textContent=option;
        answersContainer.appendChild(optionBtn);
        optionBtn.addEventListener('click', function(){
            //console.log(optionBtn.textContent);
            checkAnswer(optionBtn.textContent);
        })
    })
}

function checkAnswer (answer){
    if (answer===questions[questionIndex].answer){
        console.log('correct');
    } else {
        console.log('incorrect');
    }
    questionIndex++
    if (questionIndex<questions.length){
        showQuestion(questionIndex)

    }else {
        console.log('done');
        timerContainer.style.display='none';
        questionContainer.style.display='none';
        endContainer.style.display='block';
    }

}