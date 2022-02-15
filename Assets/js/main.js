// Preloader function
const loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  loader.classList.add("preloader");
  setTimeout(function () {
    loader.style.display = "none";
  }, 2500);
});

// image hover effect
let myPanel = document.getElementById("profile");
let subpanel = document.getElementById("profileImg");

myPanel.onmousemove = transformPanel;
myPanel.onmouseenter = handleMouseEnter;
myPanel.onmouseleave = handleMouseLeave;

let mouseX, mouseY;

let transformAmount = 5;

function transformPanel(mouseEvent) {
  mouseX = mouseEvent.pageX;
  mouseY = mouseEvent.pageY;

  const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
  const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;

  const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
  const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));

  subpanel.style.transform =
    "perspective(500px) rotateY(" +
    percentX * transformAmount +
    "deg) rotateX(" +
    percentY * transformAmount +
    "deg)";
}

function handleMouseEnter() {
  setTimeout(() => {
    subpanel.style.transition = "";
  }, 100);
  subpanel.style.transition = "transform 0.1s";
}

function handleMouseLeave() {
  subpanel.style.transition = "transform 0.1s";
  setTimeout(() => {
    subpanel.style.transition = "";
  }, 100);

  subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
}

// start button function
function startingChatting() {
  document.getElementById("intro").classList.add("introAfter");
  document.getElementById("intro").classList.remove("introBefore");
  document.getElementById("profile").classList.add("profileAfter");
  document.getElementById("profile").classList.remove("profileBefore");
  document.getElementById("form").classList.add("afterform");
  document.getElementById("form").classList.remove("beforeform");
  document.getElementById("chatDiv").classList.add("chatDivAfter");
  document.getElementById("chatDiv").classList.remove("chatDivBefore");
  document.getElementById("buttons").style.display = "none";
}

function backOption() {
  document.getElementById("intro").classList.remove("introAfter");
  document.getElementById("intro").classList.add("introBefore");
  document.getElementById("profile").classList.remove("profileAfter");
  document.getElementById("profile").classList.add("profileBefore");
  document.getElementById("form").classList.remove("afterform");
  document.getElementById("form").classList.add("beforeform");
  document.getElementById("chatDiv").classList.remove("chatDivAfter");
  document.getElementById("chatDiv").classList.add("chatDivBefore");
  document.getElementById("contentDiv").classList.add("contentBefore");
  document.getElementById("contentDiv").classList.remove("contentAfter");
  setTimeout(function () {
    document.getElementById("buttons").style.display = "flex";
  }, 900);
  document.getElementById("contentDiv").innerText="";
  recognition.stop();
}

// array is for store replys in local storage
let chatreply = [];
localStorage.setItem("reply", JSON.stringify(chatreply));

// this function is for store reply in local storage
function chatsubmmit() {
  event.preventDefault();
  let textArea = document.getElementById("textArea").value;
  document.getElementById("textArea").value = "";

  let storeValue = JSON.parse(localStorage.getItem("reply"));

  let len = storeValue.length;

  if (textArea == "hi" && textArea != "") {
    chatreply.push(textArea);
  } else if (storeValue[len - 1] == "hi" && textArea != "") {
    chatreply.push(textArea);
  } else if (textArea == "thank you" && textArea != "") {
    chatreply.push(textArea);
  } else {
    alert("Please chat With PV");
  }

  localStorage.setItem("reply", JSON.stringify(chatreply));
  chatting();
}

// this function is for reply user automatically
function chatting() {
  let storeValues = JSON.parse(localStorage.getItem("reply"));

  let right = "";
  let create = "";

  create = `<div class="chatDivLeft"><div class="left">Hi!</div></div>`;
  right = right + create;

  if (storeValues[0] == "hi") {
    create = `<div class="chatDivRight"><div class="right">${storeValues[0]}</div></div>`;
    document.getElementById("textArea").placeholder = "Your name";
    right = right + create;

    create = `<div class="chatDivLeft"><div class="left">I am Prasanna venkatesh</div></div>`;
    right = right + create;
  }

  if (storeValues.length >= 2) {
    create = `<div class="chatDivRight"><div class="right">My name is ${storeValues[1]}</div></div>`;
    document.getElementById("textArea").placeholder = "Thank you";
    right = right + create;

    create = `<div class="chatDivLeft"><div class="left">Welcome ${storeValues[1]} <a href="./../../pages/home/html/home.html">click here</a> to see my portfolio thank you</div></div>`;
    right = right + create;
  }

  if (storeValues[2] == "thank you") {
    create = `<div class="chatDivRight"><div class="right">${storeValues[2]}</div></div>`;
    right = right + create;

    create = `<div class="chatDivLeft"><div class="left">&#128522;&#128522;&#128522;</div></div>`;
    right = right + create;

    setTimeout(function () {
      window.location.href = "./../../pages/home/html/home.html";
    }, 1000);
  }

  document.getElementById("chatDiv").innerHTML = right;
}

const talk = document.getElementById("startSpeaking");
const content = document.getElementById("content");

const speechreg = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechreg();


recognition.onstart = function () {
    readOutloud("hi");
    document.getElementById("contentDiv").innerText="Say hi";
};

talk.onclick = function () {
  recognition.start();
  document.getElementById("startCharting").style.display = "none";
  document.getElementById("contentDiv").classList.remove("contentBefore");
  document.getElementById("contentDiv").classList.add("contentAfter");
};

recognition.continuous = true;


let array = [];

recognition.onresult = function (event) {
  const current = event.resultIndex;
  let transcript = event.results[current][0].transcript;
  transcript = transcript.toLowerCase();
  content.textContent = transcript;

  if (transcript.includes("hi")) {
    readOutloud("my name is prasanna venkatesh call me pv");
    document.getElementById("contentDiv").innerText="Say my name is your name";
  }

  let name = transcript.split("is")[1];

  if (transcript.includes("my name is" + name) || transcript.includes("hi my name is" + name)) {
    readOutloud(`Welcome ${name} thank you for coming`);
    
    setTimeout(function () {
      window.location.href = "./../../pages/home/html/home.html";
    }, 3000);
  }
}

function readOutloud(message) {

  const speech = new SpeechSynthesisUtterance();

  speech.text = message;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1.5;

  window.speechSynthesis.speak(speech);
}

chatting();
