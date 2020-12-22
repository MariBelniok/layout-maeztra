const modalClose = document.querySelector(".close")
const modal = document.querySelector("#modal")
modalClose.addEventListener("click", () => {
    modal.classList.remove("hide")
})
modalClose.addEventListener("click", () => {
    modal.classList.add("hide")
})