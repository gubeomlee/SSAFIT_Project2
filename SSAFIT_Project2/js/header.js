let home = document.querySelector(".home");
let signIn = document.querySelector(".signIn");
let login = document.querySelector(".login");
let myPage = document.querySelector(".myPage");
let logout = document.querySelector(".logout");

signIn.addEventListener("click", () => {
  const windowFeatures = "width=400,height=400,resizable=yes";

  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/user/signin.html", "_blank", windowFeatures);
});

login.addEventListener("click", () => {
  myPage.style.display = "inline";
  logout.style.display = "inline";
  signIn.style.display = "none";
  login.style.display = "none";
  const windowFeatures = "width=400,height=300,resizable=yes";

  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/user/login.html", "_blank", windowFeatures);
});

logout.addEventListener("click", () => {
  myPage.style.display = "none";
  logout.style.display = "none";
  signIn.style.display = "inline";
  login.style.display = "inline";
});

myPage.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/mypage/myPage.html");
});
