function submitHandler(){
    const name=document.querySelector("#name").value
    const email=document.querySelector("#email").value
    // console.log("name", name)
    // console.log("email", email)

    const userObj={
        name,
        email,
    }
    localStorage.setItem("user", JSON.stringify(userObj))
    window.location.replace("../Pages/quizApp.html")
}

function getUser(){
    const user = localStorage.getItem("user")
    if (user) {
        const userObj = JSON.parse(user)
        document.querySelector("#name").value = userObj.name
        document.querySelector("#email").value = userObj.email
    }
}