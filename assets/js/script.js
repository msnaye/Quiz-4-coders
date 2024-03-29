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
var retakeBtn = document.querySelector('.back');

var questionIndex =0;
var score = 0;

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
        answer: 'parenthesis'
    },
    {
        question: 'String values must be enclosed within _______ when being assigned to variables.',
        options: ['commas', 'quotes' ,'curly brackets', 'parentheses'],
        answer: 'quotes'
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
highscoreContainer.style.display='none';
startBtn.addEventListener('click', function(){

    startQuiz();
})

var quizTime = 30;

function startQuiz (){
    welcomeContainer.style.display='none';
    questionContainer.style.display='block';
    timerContainer.style.display='block';
    highscoreContainer.style.display='none';
    questionIndex=0
    quizTime=30;
    setTimer();
    showQuestion(questionIndex);
}

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
        //console.log('correct');
        score=score+5
        answerStatus.textContent='Correct';

    } else {
        //console.log('incorrect');
        answerStatus.textContent='Incorrect';
    }
    questionIndex++
    if (questionIndex<questions.length){
        showQuestion(questionIndex)

    }else {
        console.log('done');
        timerContainer.style.display='none';
        questionContainer.style.display='none';
        endContainer.style.display='block';
        scoreDisplay.textContent='Score: '+ score;
        //highscoreList.style.display='none';
        submitBtn.addEventListener('click',function(event){
            event.preventDefault();
            trackScore(score);
        })
    }

}

var userInfoArray = [];

function trackScore (s){
   var userInfo = {
       initial: userInitial.value,
       score: s
   } 
   //console.log(userInfo);
   userInfoArray.push(userInfo);
   
       localStorage.setItem('userInfo',JSON.stringify(userInfoArray));
       for (var i=0; i<userInfoArray.length; i++){
           var userInfoLi =document.createElement('li');
           userInfoLi.textContent= userInfoArray[i].initial+ ' '+ userInfoArray[i].score
           highscoreList.appendChild(userInfoLi);
       };
       endContainer.style.display='none';
       highscoreContainer.style.display='block';
   
}
retakeBtn.addEventListener('click', function(){
    startQuiz();
    setTimer();
})