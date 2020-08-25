/** @format */
let displayContainer = document.getElementById("display");

let name = prompt("enter your name ");

document.getElementById("name").textContent = name;

console.log(name);

let whiteBtn = document
  .getElementById("white")
  .addEventListener("click", whiteBtnFun);

let greenBtn = document
  .getElementById("green")
  .addEventListener("click", greenBtnFun);

let yellowBtn = document
  .getElementById("yellow")
  .addEventListener("click", yellowBtnFun);

function whiteBtnFun() {
  console.log("white");
  displayContainer.style.backgroundColor = "white";
}

function greenBtnFun() {
  console.log("green");
  displayContainer.style.backgroundColor = "rgb(16, 238, 16)";
}

function yellowBtnFun() {
  console.log("yellow");
  displayContainer.style.backgroundColor = "rgba(255, 255, 38, 0.836)";
}

let voiletBtn = document
  .getElementById("voilet")
  .addEventListener("click", voiletBtnFun);

function voiletBtnFun() {
  console.log("voilet");
  displayContainer.style.backgroundColor = "rgb(162, 2, 255)";
}

let redBtn = document
  .getElementById("red")
  .addEventListener("click", redBtnFun);

function redBtnFun() {
  console.log("red");
  displayContainer.style.backgroundColor = "red";
}

let pinkBtn = document
  .getElementById("pink")
  .addEventListener("click", pinkBtnFun);

function pinkBtnFun() {
  console.log("pink");
  displayContainer.style.backgroundColor = "pink";
}

let darkblueBtn = document
  .getElementById("darkblue")
  .addEventListener("click", darkblueBtnFun);

function darkblueBtnFun() {
  console.log("darkblue");
  displayContainer.style.backgroundColor = "rgb(4, 2, 94)";
}
let displayText = document.getElementById("display-text");
let textarea = document.getElementById("textareatext");

textarea.textContent = displayText.textContent;
textarea.addEventListener("change", changeText);

function changeText() {
  console.log("changeText");
  let newtext = document.getElementById("textareatext").value;

  console.log(newtext);
  displayText.textContent = newtext;
}
