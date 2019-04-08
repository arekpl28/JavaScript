const btnModal = document.querySelector(".article button")
const btnHide = document.querySelector(".hide")

btnModal.addEventListener("click", function () {
  document.querySelector("section.article").classList.add("active");
  document.querySelector("section.modal-wrap").classList.add("active");
  console.log('dziala');
})

btnHide.addEventListener("click", function () {
  document.querySelector("section.article").classList.remove("active");
  document.querySelector("section.modal-wrap").classList.remove("active");
})