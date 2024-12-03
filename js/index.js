/*==== elements inputs ====*/
const success = document.querySelector(".green");
const nameInputSignUp = document.getElementById("nameSingUP");
const emailInputSignUp = document.getElementById("emailSingUP");
const passInputSignUp = document.getElementById("passSingUP");
const btnSignUp = document.getElementById("btnSingUP");
// list of emails
let arrInfo;

if (localStorage.getItem("emailsystem") == null) {
  arrInfo = [];
} else {
  arrInfo = JSON.parse(localStorage.getItem("emailsystem"));
}
clearClass();
btnSignUp.addEventListener("click", function () {
  if (
    passInputSignUp.nextElementSibling.classList.contains("d-block") ||
    nameInputSignUp.nextElementSibling.classList.contains("d-block") ||
    emailInputSignUp.nextElementSibling.classList.contains("d-block")
  ) {
    alert("not valid");
    console.log("login not valid");
  } else {
    getInfo();
    clear();
    success.classList.replace("d-none", "d-block");
    console.log("login valid");
  }

  console.log(arrInfo);
});

function getInfo() {
  let signInfo = {
    name: nameInputSignUp.value,
    email: emailInputSignUp.value,
    pass: passInputSignUp.value,
  };
  arrInfo.push(signInfo);
  localStorage.setItem("emailsystem", JSON.stringify(arrInfo));
}

// valid name
function validNameImput() {
  const regex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
  if (regex.test(nameInputSignUp.value)) {
    nameInputSignUp.nextElementSibling.classList.replace("d-block", "d-none");
    console.log("valid");
  } else {
    nameInputSignUp.nextElementSibling.classList.replace("d-none", "d-block");
    console.log("not valid");
  }
}
// valid email
function validEmailImput() {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (regex.test(emailInputSignUp.value)) {
    emailInputSignUp.nextElementSibling.classList.replace("d-block", "d-none");
    console.log("valid");
  } else {
    emailInputSignUp.nextElementSibling.classList.replace("d-none", "d-block");
    console.log("not valid");
  }
}
// valid pass
function validPassImput() {
  const regex = /^.{6,}$/;
  if (regex.test(passInputSignUp.value)) {
    passInputSignUp.nextElementSibling.classList.replace("d-block", "d-none");
    console.log("valid");
  } else {
    passInputSignUp.nextElementSibling.classList.replace("d-none", "d-block");
    console.log("not valid");
  }
}
// clear data input data
function clear() {
  passInputSignUp.value = null;
  emailInputSignUp.value = null;
  nameInputSignUp.value = null;
}
// clear class check
function clearClass() {
  emailInputSignUp.nextElementSibling.classList.add("d-none");
  passInputSignUp.nextElementSibling.classList.add("d-none");
  nameInputSignUp.nextElementSibling.classList.add("d-none");
  success.classList.add("d-none");
}
