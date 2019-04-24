const h1 = document.querySelector('h1')

let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

h1.textContent = `rgb(${red}, ${green}, ${blue})`;

window.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38:
      document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red }, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
      break;
    case 40:
      document.body.style.backgroundColor = `rgb(${red > 0 ? --red : red }, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
      break;
    default:
      break;
  }

  h1.textContent = `rgb(${red}, ${green}, ${blue})`;

  if (red < 100) {
    h1.style.color = 'white'
  } else {
    h1.style.color = 'black'
  }
})