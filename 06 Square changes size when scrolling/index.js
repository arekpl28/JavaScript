const square = document.createElement('div');
document.body.appendChild(square);

let size = 100

square.style.width = size + 'px';
square.style.height = size + 'px';

let grow = true;

window.addEventListener('scroll', function () {
  if (size >= window.innerHeight / 2) {
    grow = !grow
  } else if (size == 0) {
    grow = !grow
  }
  if (grow) {
    size += 10;
    square.style.width = size + 'px';
    square.style.height = size + 'px';
  } else {
    size -= 10
    square.style.width = size + 'px';
    square.style.height = size + 'px';
  }
});