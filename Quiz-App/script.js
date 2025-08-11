let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        answer: 0
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets"],
        answer: 1
    },
    {
        question: "Which language runs in the browser?",
        options: ["Java", "C++", "JavaScript"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 15;

function startQuiz() {
    document.getElementById("startBtn").style.display = "none";
    document.getElementById("timer").style.display = "block";
    document.getElementById("nextBtn").style.display = "inline-block";
    loadQuestion();
}

function loadQuestion() {
    // Reset timer
    clearInterval(timer);
    timeLeft = 15;
    updateTimerDisplay();
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);

    let q = questions[currentQuestion];
    document.getElementById("question").textContent = q.question;

    let optionsHtml = "";
    q.options.forEach((option, index) => {
        optionsHtml += `<label class='option'>
                    <input type='radio' name='answer' value='${index}'> ${option}
                </label>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}

function updateTimerDisplay() {
    let timerEl = document.getElementById("timer");
    timerEl.textContent = `Time Left: ${timeLeft}s`;
    if (timeLeft <= 5) {
        timerEl.classList.add("red");
    } else {
        timerEl.classList.remove("red");
    }
}

function nextQuestion() {
    clearInterval(timer);

    let selected = document.querySelector("input[name='answer']:checked");
    if (selected && parseInt(selected.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("timer").style.display = "none";
    document.getElementById("question").innerHTML = "";
    document.getElementById("options").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("result").textContent = `🎯 Your Score: ${score} / ${questions.length}`;
}