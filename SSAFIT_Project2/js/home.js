let videoList = [
  {
    id: "gMaB-fG4u4g",
    title: "전신 다이어트 최고의 운동 [칼소폭 찐 핵핵매운맛]",
    part: "전신",
    channelName: "ThankyouBUBU",
    url: "https://www.youtube.com/embed/gMaB-fG4u4g",
  },
  {
    id: "swRNeYw1JkY",
    title: "하루 15분! 전신 칼로리 불태우는 다이어트 운동",
    part: "전신",
    channelName: "ThankyouBUBU",
    url: "https://www.youtube.com/embed/swRNeYw1JkY",
  },
  {
    id: "54tTYO-vU2E",
    title:
      "상체 다이어트 최고의 운동 BEST [팔뚝살/겨드랑이살/등살/가슴어깨라인]",
    part: "상체",
    channelName: "ThankyouBUBU",
    url: "https://www.youtube.com/embed/54tTYO-vU2E",
  },
  {
    id: "QqqZH3j_vH0",
    title: "상체비만 다이어트 최고의 운동 [상체 핵매운맛]",
    part: "상체",
    channelName: "ThankyouBUBU",
    url: "https://www.youtube.com/embed/QqqZH3j_vH0",
  },
  {
    id: "tzN6ypk6Sps",
    title: "하체운동이 중요한 이유? 이것만 보고 따라하자 ! [하체운동 교과서]",
    part: "하체",
    channelName: "김강민",
    url: "https://www.youtube.com/embed/tzN6ypk6Sps",
  },
  {
    id: "u5OgcZdNbMo",
    title: "저는 하체 식주의자 입니다",
    part: "하체",
    channelName: "GYM종국",
    url: "https://www.youtube.com/embed/u5OgcZdNbMo",
  },
  {
    id: "PjGcOP-TQPE",
    title: "11자복근 복부 최고의 운동 [복근 핵매운맛]",
    part: "복부",
    channelName: "ThankyouBUBU",
    url: "https://www.youtube.com/embed/PjGcOP-TQPE",
  },
  {
    id: "7TLk7pscICk",
    title: "(Sub)누워서하는 5분 복부운동!! 효과보장! (매일 2주만 해보세요!)",
    part: "복부",
    channelName: "SomiFit",
    url: "https://www.youtube.com/embed/7TLk7pscICk",
  },
];

let video1 = document.getElementById("video1");
let pre1 = document.getElementById("pre1");
let next1 = document.getElementById("next1");
let idx1 = 0;
let video2 = document.getElementById("video2");
let body = document.getElementById("body");
let top1 = document.getElementById("top1");
let bottom = document.getElementById("bottom");
let abs = document.getElementById("abs");

// 최근 가장 많이 본 영상
for (let i = 0; i < videoList.length; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "p-1");
  div.setAttribute("display", "box");
  if (i > 2) {
    div.style.display = "none";
  }
  video1.appendChild(div);
  let videoHtml = `
    <iframe src="https://www.youtube.com/embed/${videoList[i].id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    `;
  div.innerHTML = videoHtml;
}

let child1 = document.querySelectorAll("#video1 div");

let displayNone1 = (idx) => {
  for (let i = 0; i < idx; i++) {
    child1[i].style.display = "none";
  }
  for (let i = idx; i < idx + 3; i++) {
    child1[i].style.display = "inline";
  }
  for (let i = idx + 3; i < videoList; i++) {
    child1[i].style.display = "none";
  }
};

pre1.addEventListener("click", () => {
  if (idx1 > 0) {
    idx1--;
    displayNone1(idx1);
  }
});

next1.addEventListener("click", () => {
  if (idx1 < videoList.length - 3) {
    idx1++;
    displayNone1(idx1);
  }
});

// 운동 부위 선택
for (let i = 0; i < videoList.length; i++) {
  let div = document.createElement("div");
  div.setAttribute("class", "p-1");
  div.setAttribute("display", "box");
  video2.appendChild(div);
  let videoHtml = `
            <iframe src="https://www.youtube.com/embed/${videoList[i].id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            `;
  div.innerHTML = videoHtml;
}

let child2 = document.querySelectorAll("#video2 div");

let displayType = (type) => {
  for (let i = 0; i < videoList.length; i++) {
    if (videoList[i].part != type) {
      child2[i].style.display = "none";
    } else {
      child2[i].style.display = "block";
    }
  }
};

displayType("전신");

body.addEventListener("click", () => {
  displayType("전신");
});

top1.addEventListener("click", () => {
  displayType("상체");
});

bottom.addEventListener("click", () => {
  displayType("하체");
});

abs.addEventListener("click", () => {
  displayType("복부");
});
