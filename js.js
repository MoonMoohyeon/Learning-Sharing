function openModal1() {
  modal1.style.display = "block";
}

function closeModal1() {
  modal1.style.display = "none";
}

function openModal2() {
  modal2.style.display = "block";
}

function closeModal2() {
  modal2.style.display = "none";
}

function openModal3() {
  modal3.style.display = "block";
}

function closeModal3() {
  modal3.style.display = "none";
}

function openModal4() {
  modal3.style.display = "block";
}

function closeModal4() {
  modal3.style.display = "none";
}

let state1 = true;
let state2 = true;
let state3 = true;
let state4 = true;

function spain() {
  if (state1) {
    const text = document.getElementById("spain");
    text.innerHTML = "현재 597일째 학습 중";
    text.style.color = "red";
    state1 = false;
  } else {
    const text = document.getElementById("spain");
    text.style.color = "black";
    text.innerHTML = "스페인어 자격증 따기";
    state1 = true;
  }
}

function baekjun() {
  if (state2) {
    const text = document.getElementById("baekjun");
    text.innerHTML = "현재 골드 3 1175점";
    text.style.color = "red";
    state2 = false;
  } else {
    const text = document.getElementById("baekjun");
    text.style.color = "black";
    text.innerHTML = "백준 플레찍기";
    state2 = true;
  }
}

function chess() {
  if (state3) {
    const text = document.getElementById("chess");
    text.innerHTML = "레이팅 1800점 찍고 도전, 현재 1370점";
    text.style.color = "red";
    state3 = false;
  } else {
    const text = document.getElementById("chess");
    text.style.color = "black";
    text.innerHTML = "체스 레이팅 따기";
    state3 = true;
  }
}

function grade() {
  if (state4) {
    const text = document.getElementById("grade");
    text.style.color = "red";
    text.innerHTML = "현재 학점 평균 3.8";
    state4 = false;
  } else {
    const text = document.getElementById("grade");
    text.style.color = "black";
    text.innerHTML = "학점 유지하며 졸업하기";
    state4 = true;
  }
}

function showMenu() {
  var nav = document.getElementById("nav-box");
  nav.style.visibility = "visible";
}

function hideMenu() {
  var nav = document.getElementById("nav-box");
  nav.style.visibility = "hidden";
}
