const btn = document.querySelectorAll('button[data-key]')

const removeTask = (e) => {
  // e.target.remove()
  // e.target.parentNode.remove();
  const index = e.target.dataset.key;
  document.querySelector(`li[data-key = '${index}']`).remove();
  console.log(index);
}

btn.forEach(item => item.addEventListener('click', removeTask))