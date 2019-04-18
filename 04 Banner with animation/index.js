const colorImgHtml = document.querySelector(".color")
const grayImgHtml = document.querySelector(".gray")
const h1Html = document.querySelector(".member h1")
const h2Html = document.querySelector(".member h2")

const colorImages = ["img/s1.png", "img/s2.png", "img/s3.png"];
const grayImages = ["img/s1a.png", "img/s2a.png", "img/s3a.png"];
const names = ["Amanda Evans", "John Smith", "Lucas Jones"];
const professions = ["JS programmer", "UX and UI designer", "Front-End Developer"];

let activeElement = 0;
const timeChange = 4000

function changeElement() {
  activeElement++;
  if (activeElement === colorImages.length) {
    activeElement = 0;
  }
  colorImgHtml.src = colorImages[activeElement];
  grayImgHtml.src = grayImages[activeElement];
  h1Html.textContent = names[activeElement];
  h2Html.textContent = professions[activeElement];
}

setInterval(changeElement, timeChange)