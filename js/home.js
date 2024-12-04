const btnlogout = document.getElementById("logout");

let array = JSON.parse(localStorage.getItem("emailsystem"));
btnlogout.addEventListener("click", function () {
  logout();
});
window.onload = function () {
  if (localStorage.getItem("isLoggedIn") !== "true") {
    window.location.href = "index.html"; // Redirect to login page
  }
};
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("name");
  window.location.href = "index.html";
}
let bb = localStorage.getItem("name");
let displayName = `<h1 class="text-center text-color">Welcome ${bb}</h1>`;
document.getElementById("inner").innerHTML = displayName;
