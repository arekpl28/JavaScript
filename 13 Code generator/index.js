const btn = document.querySelector('button');
const section = document.querySelector('section');

const chars = 'ABCDEFGHIJK1234567890'

const codesNumber = 10;
const charsNumber = 10;

const codeGenerator = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = ""
    for (let j = 0; j < charsNumber; j++) {
      const index = Math.floor(Math.random() * chars.length)
      code += chars[index]
    }
    const div = document.createElement('div');
    div.textContent = code;
    section.appendChild(div)
  }
}

btn.addEventListener('click', codeGenerator)