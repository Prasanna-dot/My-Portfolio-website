const loader = document.getElementById("preLoader");
const chat = document.getElementById("firstChat");
window.addEventListener("load", function () {
  loader.classList.add("preloader");
});

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

function startingChatting() {
  document.getElementById("intro").classList.add("introAfter");
  document.getElementById("intro").classList.remove("introBefore");
  document.getElementById("profile").classList.add("profileAfter");
  document.getElementById("profile").classList.remove("profileBefore");
  document.getElementById("form").classList.add("afterform");
  document.getElementById("form").classList.remove("beforeform");
  document.getElementById("chatDiv").classList.add("chatDivAfter");
  document.getElementById("chatDiv").classList.remove("chatDivBefore");
  document.getElementById("startButton").style.display = "none";
}

function buttonChange() {
  document.getElementById(
    "actionButton"
  ).innerHTML = `<svg style="fill: rgb(255, 255, 255); width:40%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <path
      d="M511.6 36.86l-64 415.1c-1.5 9.734-7.375 18.22-15.97 23.05c-4.844 2.719-10.27 4.097-15.68 4.097c-4.188 0-8.319-.8154-12.29-2.472l-122.6-51.1l-50.86 76.29C226.3 508.5 219.8 512 212.8 512C201.3 512 192 502.7 192 491.2v-96.18c0-7.115 2.372-14.03 6.742-19.64L416 96l-293.7 264.3L19.69 317.5C8.438 312.8 .8125 302.2 .0625 289.1s5.469-23.72 16.06-29.77l448-255.1c10.69-6.109 23.88-5.547 34 1.406S513.5 24.72 511.6 36.86z" />
</svg>`;

  let myForm = document.getElementById("chatform");
  myForm.setAttribute("onsubmit", "prasanna()");

  let check = document.getElementById("textArea").value;
  if (check == "") {
    document.getElementById(
      "actionButton"
    ).innerHTML = `<svg style="fill: rgb(255, 255, 255); width:40%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 352c53.03 0 96-42.97 96-96v-160c0-53.03-42.97-96-96-96s-96 42.97-96 96v160C96 309 138.1 352 192 352zM344 192C330.7 192 320 202.7 320 215.1V256c0 73.33-61.97 132.4-136.3 127.7c-66.08-4.169-119.7-66.59-119.7-132.8L64 215.1C64 202.7 53.25 192 40 192S16 202.7 16 215.1v32.15c0 89.66 63.97 169.6 152 181.7V464H128c-18.19 0-32.84 15.18-31.96 33.57C96.43 505.8 103.8 512 112 512h160c8.222 0 15.57-6.216 15.96-14.43C288.8 479.2 274.2 464 256 464h-40v-33.77C301.7 418.5 368 344.9 368 256V215.1C368 202.7 357.3 192 344 192z" /></svg>`;

    myForm.setAttribute("onsubmit", "sam()");
  }
}

function prasanna() {
  event.preventDefault();
  console.log("Prasanna");
}

function sam() {
  event.preventDefault();
  console.log("sam");
}

buttonChange();