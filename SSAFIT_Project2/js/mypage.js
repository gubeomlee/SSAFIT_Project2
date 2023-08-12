let userInfo = document.querySelectorAll(".userInfo");
let like = document.querySelectorAll(".like");
let likeVideo = document.querySelectorAll(".like iframe");
let myReview = document.querySelectorAll(".myReview");
let fallow = document.querySelectorAll(".fallow");
let fallowList = document.querySelectorAll(".fallow div");

userInfo[1].style.display = "block";
likeVideo.forEach((video) => {
  video.style.display = "none";
});
myReview[1].style.display = "none";
fallowList.forEach((f) => {
  f.style.display = "none";
});
userInfo[0].classList.add("fw-bold");

userInfo[0].addEventListener("click", () => {
  userInfo[1].style.display = "block";
  likeVideo.forEach((video) => {
    video.style.display = "none";
  });
  myReview[1].style.display = "none";
  fallowList.forEach((f) => {
    f.style.display = "none";
  });

  userInfo[0].classList.add("fw-bold");
  like[0].classList.remove("fw-bold");
  myReview[0].classList.remove("fw-bold");
  fallow[0].classList.remove("fw-bold");
});

like[0].addEventListener("click", () => {
  userInfo[1].style.display = "none";
  likeVideo.forEach((video) => {
    video.style.display = "block";
  });
  myReview[1].style.display = "none";
  fallowList.forEach((f) => {
    f.style.display = "none";
  });

  like[0].classList.add("fw-bold");
  userInfo[0].classList.remove("fw-bold");
  myReview[0].classList.remove("fw-bold");
  fallow[0].classList.remove("fw-bold");
});

myReview[0].addEventListener("click", () => {
  userInfo[1].style.display = "none";
  likeVideo.forEach((video) => {
    video.style.display = "none";
  });
  myReview[1].style.display = "block";
  fallowList.forEach((f) => {
    f.style.display = "none";
  });

  myReview[0].classList.add("fw-bold");
  userInfo[0].classList.remove("fw-bold");
  like[0].classList.remove("fw-bold");
  fallow[0].classList.remove("fw-bold");
});

fallow[0].addEventListener("click", () => {
  userInfo[1].style.display = "none";
  likeVideo.forEach((video) => {
    video.style.display = "none";
  });
  myReview[1].style.display = "none";
  fallowList.forEach((f) => {
    f.style.display = "block";
  });

  fallow[0].classList.add("fw-bold");
  userInfo[0].classList.remove("fw-bold");
  like[0].classList.remove("fw-bold");
  myReview[0].classList.remove("fw-bold");
});
