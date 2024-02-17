"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 99;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    
    //resizeNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      //play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  phatAudio();
  changeImage("yes");
}

function phatAudio(){
  const audio = new Audio('sound/happy-cat.mp3');
  audio.play();
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.55;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function resizeNoButton() {
  const computedStyle = window.getComputedStyle(noButton);
  const width = parseFloat(computedStyle.getPropertyValue("width"));
  const height = parseFloat(computedStyle.getPropertyValue("height"));
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));

  const newWidth = width / 1.2;
  const newHeight = height / 1.2;
  const newFontSize = fontSize / 1.9;

  noButton.style.width = `${newWidth}px`;
  noButton.style.height = `${newHeight}px`;
  noButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Em chắc chứ?",
    "Baby à :((",
    "Đừng vậy mà （；´д｀)",
    "Á hự... ",
    "Baby don't kill me (;´༎ຶД༎ຶ`)",
    "Dying..."
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

document.addEventListener("keydown", function (event){
  if (event.ctrlKey){
     event.preventDefault();
  }
  if(event.keyCode == 123){
     event.preventDefault();
  }

  document.addEventListener('contextmenu',
  event => event.preventDefault()
);
});
