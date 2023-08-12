let editBtn = document.querySelector(".editBtn");
let removeBtn = document.querySelector(".removeBtn");
let reviewList = document.querySelector(".reviewList");

editBtn.addEventListener("click", () => {
  const windowFeatures = "width=600,height=600,resizable=yes";

  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/review/reviewEdit.html", "_blank", windowFeatures);
});

removeBtn.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/review/reviewMain.html", "_self");
});

reviewList.addEventListener("click", () => {
  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/review/reviewMain.html", "_self");
});
