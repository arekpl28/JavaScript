const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const panel = document.querySelector('.time div');

let time = 0;
let active = false;
let idI;

const timer = () => {
  if (!active) {
    active = !active;
    btnStart.textContent = "Pause";
    idI = setInterval(start, 10)
  } else {
    active = !active;
    btnStart.textContent = "Start";
    clearInterval(idI)
  }
}

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
}

const reset = () => {
  time = 0;
  panel.textContent = "---"
  clearInterval(idI)
  btnStart.textContent = "Start";
  active = false;
}

btnStart.addEventListener('click', timer)
btnReset.addEventListener('click', reset)