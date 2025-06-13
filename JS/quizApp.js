

const quizQuestions = [
    {
        id: 1,
        question: "Q1: HTML stands for?",
        options: {
            a: "Hyper Text Markup Language",
            b: "Hyper Text Programming Language",
            c: "Hyper Text Styling Language",
            d: "Hyper Text Scripting Language"
        },
        answer: "Hyper Text Markup Language"
    },
    {
        id: 2,
        question: "Q2: Which language is used for styling web pages?",
        options: {
            a: "HTML",
            b: "CSS",
            c: "JavaScript",
            d: "PHP"
        },
        answer: "CSS"
    },
    {
        id: 3,
        question: "Q3: Which of these is a JavaScript framework?",
        options: {
            a: "Django",
            b: "React",
            c: "Laravel",
            d: "Bootstrap"
        },
        answer: "React"
    },
    {
        id: 4,
        question: "Q4: Which tag is used to define a hyperlink in HTML?",
        options: {
            a: "link",
            b: "a",
            c: "href",
            d: "url"
        },
        answer: "a"
    },
    {
        id: 5,
        question: "Q5: Which company developed JavaScript?",
        options: {
            a: "Microsoft",
            b: "Netscape",
            c: "Oracle",
            d: "Sun Microsystems"
        },
        answer: "Netscape"
    },
    {
        id: 6,
        question: "Q6: Which of these is not a programming language?",
        options: {
            a: "Python",
            b: "HTML",
            c: "Java",
            d: "C++"
        },
        answer: "HTML"
    },
    {
        id: 7,
        question: "Q7: What does CSS stand for?",
        options: {
            a: "Creative Style Sheets",
            b: "Cascading Style Sheets",
            c: "Colorful Style Sheets",
            d: "Cascading Script Sheets"
        },
        answer: "Cascading Style Sheets"
    },
    {
        id: 8,
        question: "Q8: Which HTML tag is used to display an image?",
        options: {
            a: "img",
            b: "image",
            c: "picture",
            d: "src"
        },
        answer: "img"
    },
    {
        id: 9,
        question: "Q9: Which HTML tag is used to define a table?",
        options: {
            a: "table",
            b: "thead",
            c: "tr",
            d: "tb"
        },
        answer: "table"
    },
    {
        id: 10,
        question: "Q10: Which one is not a JavaScript data type?",
        options: {
            a: "String",
            b: "Boolean",
            c: "Object",
            d: "Function"
        },
        answer: "Function"
    }
];



let indexNumber = 0
let count = document.getElementById("count")
count.innerHTML = `${indexNumber + 1}/${quizQuestions.length}`
let correctAnsCount = 0
let wrongAnsCount = 0


// Renders the current quiz question and its options on the UI
function uiRender() {
    const question = document.getElementById("question");

    const options = document.getElementById("options");

    question.innerHTML = quizQuestions[indexNumber].question

    const optionList = quizQuestions[indexNumber].options


    options.innerHTML = ""

    for (var key in optionList) {
        console.log(optionList[key])
        options.innerHTML += `<li onclick="checkAns(this)">${optionList[key]}</li>`

    }

}


// Moves to the next question or ends the quiz if all questions are done.
function nextQuestion() {
    indexNumber++
    if (indexNumber < quizQuestions.length) {
        uiRender()
        count.innerHTML = `${indexNumber + 1} / ${quizQuestions.length} `
    } else {

        window.location.replace("../Pages/reportCard.html")
        generateReport()


    }


}

// Generates the quiz report and stores it in localStorage
function generateReport() {
    const percentage = (correctAnsCount / quizQuestions.length) * 100


    let rank;
    let message;
    if (percentage >= 90) {
        rank = "A1"
        message = "You rocked!";
    } else if (percentage >= 80) {
        rank = "A+"
        message = "Excellent work!";
    } else if (percentage >= 70) {
        rank = "A"
        message = "Good job!";
    } else if (percentage >= 60) {
        rank = "B"
        message = "Need improvement!"
    } else if (percentage >= 50) {
        rank = "C"
        message = "Need workhard!"
    } else {
        rank = "Fail"
        message = "Try again!";

    }

    console.log(rank)

    const reportObj = {
        totalQues: quizQuestions.length,
        correctAnsCount,
        wrongAnsCount,
        percentage,
        rank,
        message,
    }
    localStorage.setItem("report", JSON.stringify(reportObj))
}


// Checks the selected answer, updates score, and highlights correct/wrong answers
function checkAns(ele) {
    console.log(ele.innerHTML)
    const allLi = document.getElementById("options").children

    const userSelection = ele.innerHTML
    const correctAns = quizQuestions[indexNumber].answer
    if (userSelection === correctAns) {
        correctAnsCount++
        console.log("correct ans")

        ele.style.background = "green"

    } else {
        console.log("wrong ans")
        wrongAnsCount++
        ele.style.background = "red"


        // Loop through all <li> options to find and highlight the correct answer

        for (var i = 0; i < allLi.length; i++) {
            if (allLi[i].innerHTML === correctAns) {
                allLi[i].style.background = "green"   // If this option is the correct answer, color it green
                break // Stop looping once the correct answer is found
            }

        }

    }

    
// Disable clicking on any option to prevent further answers
    for (var i = 0; i < allLi.length; i++) {
        allLi[i].style.pointerEvents = "none"

    }
    nextBtn.disabled = false
}



// Displays the user's name and email on the quiz screen
function userDetails() {
    const user = JSON.parse(localStorage.getItem("user"))
    const userName = document.querySelector("#userName")
    const userEmail = document.querySelector("#userEmail")
    userName.innerHTML = user.name
    userEmail.innerHTML = user.email
}



// Timer variables
let timerElement = document.getElementById("timer");
let totalTime = 300; // 5 minutes in seconds
let interval;



// Starts the timer and updates display every second
function setTimer() {
    updateTimerDisplay();
    interval = setInterval(timer, 1000)
}


// This function runs on every tick of the timer
function timer() {
    totalTime--
    updateTimerDisplay()
    if (totalTime <= 0) {
        clearInterval(interval)
        alert("Time's up!")
        generateReport()
        window.location.replace("../Pages/reportCard.html")
    }
}



// Updates the timer display on the screen
function updateTimerDisplay() {
    let minutes = Math.floor(totalTime / 60);  // Calculate remaining minutes
    let seconds = totalTime % 60;
    timerElement.innerHTML = `Time Left: ${minutes} m ${seconds} s`; // Calculate remaining seconds
}


// Calls all necessary functions when quiz page loads:
// - uiRender(): Displays the first question and options
// - setTimer(): Starts the countdown timer
// - userDetails(): Shows user's name and email in the quiz header
// - getUser(): Pre-fills login form fields if user data exists in localStorage
function callingFunctions() {
    uiRender()
    setTimer()
    userDetails()
    getUser()
}