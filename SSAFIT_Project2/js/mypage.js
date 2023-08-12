let userInfo = document.querySelectorAll(".userInfo");
let like = document.querySelectorAll(".like");
let myReview = document.querySelectorAll(".myReview");
let fallow = document.querySelectorAll(".fallow");

userInfo[0].addEventListener("click", () => {
  userInfo[1].style.display = "block";
  like[1].style.display = "none";
  myReview[1].style.display = "none";
  fallow[1].style.display = "none";
  console.log(1);
});

like[0].addEventListener("click", () => {
  userInfo[1].style.display = "none";
  like[1].style.display = "block";
  myReview[1].style.display = "none";
  fallow[1].style.display = "none";
  console.log(1);
});

myReview[0].addEventListener("click", () => {
  userInfo[1].style.display = "none";
  like[1].style.display = "none";
  myReview[1].style.display = "block";
  fallow[1].style.display = "none";
  console.log(1);
});

fallow[0].addEventListener("click", () => {
  userInfo[1].style.display = "none";
  like[1].style.display = "none";
  myReview[1].style.display = "none";
  fallow[1].style.display = "block";
  console.log(1);
});
