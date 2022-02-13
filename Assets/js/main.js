const loader = document.getElementById("preLoader");
const chat = document.getElementById("firstChat");
window.addEventListener("load", function () {
  loader.classList.add("preloader");
  chatReplyShow();
});

let chatarray = ["HI!", "I am prasanna venkatesh"];

let chatreply = [];

function submitHandler() {
  event.preventDefault();

  let chatinput = document.getElementById("chatTextArea").value;
  document.getElementById("chatTextArea").value = "";

  let chatreplystore = JSON.parse(localStorage.getItem("chatreply"));
  let len = chatreplystore.length;

  if (len == 0 && chatinput != "") {
    chatreply.push(chatinput);
  } else if (chatreplystore[len - 1] != chatinput && chatinput != "") {
    chatreply.push(chatinput);
  } else {
    alert("Please chat with PV");
  }

  store();
  chatReplyShow();
}

function store() {
  localStorage.setItem("chatreply", JSON.stringify(chatreply));
}

function chatReplyShow() {
  let chatreplys = JSON.parse(localStorage.getItem("chatreply"));
  let length = chatreplys.length;
  let right = "";
  let create = "";
  
    create = `<div class="chatDiv"><div id="firstChat" class="firstChat">${chatarray[0]}</div></div>`;
    right = right + create;

  if (chatreplys[0] == "hi") {
    document.getElementById("chatTextArea").placeholder = "Your name";
    create = `<div class="chatDiv"><div class= "right">${chatreplys[0]}</div></div>`;
    right = right + create;
    create = `<div class="chatDiv"><div class= "left">${chatarray[1]}</div></div>`;
    right = right + create;
  }

  console.log(length);

  if (length == 2) {
    create = `<div class="chatDiv"><div class= "right">MY NAME IS ${chatreplys[1]}</div></div>`;
    right = right + create;
    create = `<div class="chatDiv"><div class= "left">Welcome ${chatreplys[1]} <a href='./../../Assets/pages/home/html/home.html'>click here</a> to see my portfolio</div></div>`;
    right = right + create;
  }

  document.getElementById("chatDiv").innerHTML = right;
}

store();
chatReplyShow();
