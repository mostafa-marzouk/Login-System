const btnlogout = document.getElementById("logout");
let array = JSON.parse(localStorage.getItem("emailsystem"));
btnlogout.addEventListener("click", function () {
  logout();
});
window.onload = function () {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "login.html"; // Redirect to login page
  }
};
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}
