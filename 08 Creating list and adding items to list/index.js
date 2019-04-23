const btn = document.querySelector('button')
const ul = document.querySelector('ul')

let size = 10;
let orderElement = 1

btn.addEventListener('click', function () {

  for (let i = 0; i < 10; i++) {
    const li = document.createElement('li');
    li.textContent = `Element nr: ${orderElement++}`;
    li.style.fontSize = `${size++}px`
    ul.appendChild(li);
  }
});