// Preloader function
const loader = document.getElementById("preLoader");
window.addEventListener("load", function () {
  loader.classList.add("preloader");
  setTimeout(function () {
    loader.style.display = "none";
  }, 2500);
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

  const centerX = myPanel.offsetLeft + myPanel.clientWidth / 3;
  const centerY = myPanel.offsetTop + myPanel.clientHeight / 3;

  const percentX = (mouseX - centerX) / (myPanel.clientWidth / 3);
  const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 3));

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
