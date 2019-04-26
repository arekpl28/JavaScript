const btn = document.querySelector('button');
const div = document.querySelector('div');
const input = document.querySelector('input');

let names = [];

const addName = (e) => {
  e.preventDefault();
  const newName = input.value;
  if (input.value.length) {
    for (name of names) {
      if (name === newName) {
        alert("You have already added this item to the list!!!");
        return
      }
    }
    names.push(newName);
    div.textContent += newName + ', ';
    input.value = "";
  }
}

btn.addEventListener('click', addName);