

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

function nextQuestion() {
    indexNumber++
    if (indexNumber < quizQuestions.length) {
        uiRender()
        count.innerHTML = `${indexNumber + 1} / ${quizQuestions.length} `
    } else {
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
            message="Need improvement!"
        } else if (percentage >= 50) {
            rank = "C"
            message="Need workhard!"
        }else {
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
        console.log("reportObj", reportObj)
        localStorage.setItem("report", JSON.stringify(reportObj))
        window.location.replace("../Pages/reportCard.html")

    }


}

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

        for (var i = 0; i < allLi.length; i++) {
            // console.log(allLi[i].innerHTML)
            if (allLi[i].innerHTML === correctAns) {
                allLi[i].style.background = "green"
                break
            }

        }

    }

    for (var i = 0; i < allLi.length; i++) {
        allLi[i].style.pointerEvents = "none"

    }
    nextBtn.disabled = false
}

function userDetails() {
    const user = JSON.parse(localStorage.getItem("user"))
    const userName = document.querySelector("#userName")
    const userEmail = document.querySelector("#userEmail")
    userName.innerHTML = user.name
    userEmail.innerHTML = user.email
}