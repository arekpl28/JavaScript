const btn = document.querySelector('button');

let number = 0;
let activeNumber = 0;

function createElement() {
  number++;
  activeNumber++;
  const square = document.createElement('div');

  // if (number % 5 == 0) {
  //   square.classList.add('circle');
  // }

  if (activeNumber == 5) {
    square.classList.add('circle');
    activeNumber = 0;
  }

  document.body.appendChild(square);
  square.textContent = number;
}

btn.addEventListener('click', createElement);