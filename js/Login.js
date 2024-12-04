/*====elements inputs LOGIN====*/
const emailInputLogin = document.getElementById("emailLogin")
const passInputLogin = document.getElementById("passLogin")
const btnLogin = document.getElementById("btnLogin")
const redMessage = document.getElementById("red")
//===========================================JS Login=========================================

let arrInfo = JSON.parse(localStorage.getItem("emailsystem")) 


btnLogin.addEventListener("click", function (e) {
    getInfo()
    check()
      
})


function getInfo() {
    let infoLogin = {
        mail : emailInputLogin.value ,
        pass : passInputLogin.value ,
    }
}
function check() {
    for (let i = 0; i < arrInfo.length; i++){
        if (emailInputLogin.value == arrInfo[i].email && passInputLogin.value == arrInfo[i].pass) {
            console.log("login done");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "/home.html";
            
        } else {
            redMessage.classList.replace("d-none","d-block")
            console.log("rong an pass or email");
            
        }
    }
}
