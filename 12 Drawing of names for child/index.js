const btn = document.querySelector('button');
const div = document.querySelector('div');

const names = ["Adam", "Joanna", "Arek", "Anastacia", "Julia", "Piotr"]

const nameGenerator = () => {
  const index = Math.floor(Math.random() * names.length)
  div.textContent = `The best name for your child is: ${names[index]}`
}

btn.addEventListener('click', nameGenerator)