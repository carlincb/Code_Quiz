// Defined global variables.
var startQuizButton = document.getElementById("startQuizButton");

// Variable defined for timer/score input.
var timerInput = document.getElementById("countdown");

// Variables defined for questions.
var question1 = document.getElementById("question1");
var question2 = document.getElementById("question2");
var question3 = document.getElementById("question3");
var question4 = document.getElementById("question4");

// Variables defined for button options for answers and feedback on answers.
var btn1A = document.getElementById("option1A");
var btn1B = document.getElementById("option1B");
var btn1C = document.getElementById("option1C");
var btn1D = document.getElementById("option1D");
var answerFeedback = document.getElementById("answerFeedback");

var btn2A = document.getElementById("option2A");
var btn2B = document.getElementById("option2B");
var btn2C = document.getElementById("option2C");
var btn2D = document.getElementById("option2D");
var answerFeedback2 = document.getElementById("answerFeedback2");

var btn3A = document.getElementById("option3A");
var btn3B = document.getElementById("option3B");
var btn3C = document.getElementById("option3C");
var btn3D = document.getElementById("option3D");
var answerFeedback3 = document.getElementById("answerFeedback3");

var btn4A = document.getElementById("option4A");
var btn4B = document.getElementById("option4B");
var btn4C = document.getElementById("option4C");
var btn4D = document.getElementById("option4D");
var answerFeedback4 = document.getElementById("answerFeedback4");

// Defined variables for page display after the quiz runs.
var finalScorePage = document.getElementById("finalScore");
var highScorePage = document.getElementById("highscores");
var scoreInput = document.getElementById("score");

var submitButton = document.getElementById("submitButton");
var goBackButton = document.getElementById("goBackButton");
var clearHighScores = document.getElementById("clearHighscores");

var timeLeft = 60;
var userScore = 0;

var mainPage = document.getElementById("mainPage");
var questionContainer = document.getElementById("questionContainer");
var initials = document.getElementById("initials");

// Start Quiz Button Linked
startQuizButton.addEventListener("click", function(){
    mainPage.style.display = "none";
    questionContainer.style.display = "block";
    question1.style.display = "block";
    displayTime();
});

btn1A.addEventListener("click", function(){
    userScore = timeLeft;
    answerFeedback.textContent = "Right!";
    question1.style.display = "none";
    question2.style.display = "block";
    quizOver();
});

btn1B.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question1.style.display = "none";
    question2.style.display = "block";
    quizOver();
});

btn1C.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question1.style.display = "none";
    question2.style.display = "block";
    quizOver();
});

btn1D.addEventListener("click", function(){
    timeLeft-=10;
    userScore = timeLeft;
    answerFeedback.textContent = "Wrong!";
    question1.style.display = "none";
    // question2.style.display = "block";
    quizOver();
});

function quizOver(){
    questionContainer.style.display = "none";
    finalScorePage.style.display = "block";
    timerInput.style.display = "none";
    console.log(userScore);
};

function displayTime(){
    timerInput.textContent = timeLeft;
    var timeCount = setInterval (function(){
        timeLeft--;
        timerInput.textContent = timeLeft;
    }, 1000);
    if(timeLeft<=0){
        quizOver();
        clearInterval(timeCount);
    };
};

var endScores = JSON.parse(localStorage.getItem("scores"));
if (endScores) {
  endScores = JSON.parse(localStorage.getItem("scores"));
} else {
  endScores = [];
};

submitButton.addEventListener("click", function(){
    var userInitials = initials.value;
    console.log(userInitials);
    endScores.push({
        initials: userInitials,
        score: userScore,
    });
    localStorage.setItem("scores", JSON.stringify(endScores));
});

// Create Timer Function
// Create Question/Answer/Feedback Function
// Create Score Tracker Function
// Create Function to Save/Clear Highscores