const btnIncrease = document.querySelector('.larger');
const btnDecrease = document.querySelector('.smaller');
const btnBorder = document.querySelector('.border');
const text = document.querySelector('h1');

let textSize = 40;

function textIncrease() {
  textSize += 5;
  text.style.fontSize = textSize + "px";
}

function textDecrease() {
  textSize -= 5;
  text.style.fontSize = textSize + "px";
}

function textBorder() {
  text.classList.toggle("black")
}

btnIncrease.addEventListener("click", textIncrease);

btnDecrease.addEventListener("click", textDecrease);

btnBorder.addEventListener("click", textBorder);