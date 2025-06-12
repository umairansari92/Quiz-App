function onload() {
    const report = JSON.parse(localStorage.getItem("report"))
    console.log("onload", report)
    const parent = document.getElementById("parent")


   let buttonHTML = "";

    // Show button only if percentage is less than 70
    if (report.percentage < 70) {
        buttonHTML = `<button onclick="goToHome()">Try Again</button>`;
    }

    parent.innerHTML = `
        <h1>REPORT CARD</h1>
        <h3>Total Questions: ${report.totalQues}</h3>
        <h3>Correct Questions: ${report.correctAnsCount}</h3>
        <h3>Wrong Questions: ${report.wrongAnsCount}</h3>
        <h3>Percentage: ${report.percentage}%</h3>
        <h3>RANK: "${report.rank}"</h3>
        <h3>Message: ${report.message}</h3>
        ${buttonHTML}
    `;
}

onload()

function goToHome() {
    window.location.href = "./quizApp.html";
  }