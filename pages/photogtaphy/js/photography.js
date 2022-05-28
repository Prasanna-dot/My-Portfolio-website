// image hover effect
let myPanel = document.getElementById('profile')
let subpanel = document.getElementById('profileImg')

myPanel.onmousemove = transformPanel
myPanel.onmouseenter = handleMouseEnter
myPanel.onmouseleave = handleMouseLeave

let mouseX, mouseY

let transformAmount = 5

function transformPanel(mouseEvent) {
  mouseX = mouseEvent.pageX
  mouseY = mouseEvent.pageY

  const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2
  const centerY = myPanel.offsetTop + myPanel.clientHeight / 2

  const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2)
  const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2))

  subpanel.style.transform =
    'perspective(500px) rotateY(' +
    percentX * transformAmount +
    'deg) rotateX(' +
    percentY * transformAmount +
    'deg)'
}

function handleMouseEnter() {
  setTimeout(() => {
    subpanel.style.transition = ''
  }, 100)
  subpanel.style.transition = 'transform 0.1s'
}

function handleMouseLeave() {
  subpanel.style.transition = 'transform 0.1s'
  setTimeout(() => {
    subpanel.style.transition = ''
  }, 100)

  subpanel.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg)'
}

let photos = ''

for (let img = 1; img < 46; img++) {
  let create = `<div><img class="image" width="100%" src="./../../../Assets/img/photography/photography_${img}-min.jpg"></div>`
  photos = photos + create
  document.getElementById('birdsDiv').innerHTML = photos
}

for (let imgs = 0; imgs < 45; imgs++) {
  document.getElementsByClassName(`image`)[imgs].onclick = function () {
    let cre = `<img class="image" height="90%" src="./../../../Assets/img/photography/photography_${
      imgs + 1
    }-min.jpg">`
    document.getElementById('preimagediv').innerHTML = cre
    document.getElementById("preview").classList.add("previewAft");
    document.getElementById("preview").classList.remove("previewBef");
    document.getElementById("sec1Div").classList.add("sec1DivAft");
    document.getElementById("sec1Div").classList.remove("sec1DivBef");
  }
}

document.getElementsByClassName(`preimagediv`)[0].onclick = function () {
  document.getElementById("preview").classList.add("previewBef");
  document.getElementById("preview").classList.remove("previewAft");
  document.getElementById("sec1Div").classList.add("sec1DivBef");
  document.getElementById("sec1Div").classList.remove("sec1DivAft");
}
