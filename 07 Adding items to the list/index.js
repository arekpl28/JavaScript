const btn = document.querySelector('button')
const ul = document.querySelector('ul')

let number = 1;

btn.addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = number;
  ul.appendChild(li);
  if (number % 3 == 0) {
    li.classList.add('big')
  }
  number += 2;
});