let addBtn = document.querySelector(".addBtn");
let reviewInfo = document.querySelector(".reviewInfo");

addBtn.addEventListener("click", () => {
  const windowFeatures = "width=600,height=450,resizable=yes";

  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/review/reviewAdd.html", "_blank", windowFeatures);
});

reviewInfo.addEventListener("click", () => {
  const windowFeatures = "width=600,height=300,resizable=yes";

  window.open("http://127.0.0.1:5500/SSAFIT_Project2/html/review/reviewInfo.html", "_self", windowFeatures);
});
