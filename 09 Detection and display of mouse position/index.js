const h1 = document.querySelector('h1')

document.body.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const width = window.innerWidth;
  const height = window.innerHeight
  const red = x / width * 100;
  const green = y / height * 100;
  const blue = ((x / width * 100) + (y / height * 100) / 2);
  h1.textContent = `${x}px width, ${y}px height`;
  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`
})