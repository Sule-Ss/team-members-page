
let switchKey = document.querySelector("#flexSwitchCheckDefault");
let body = document.querySelector(".container");
let container = document.querySelector('.lightMode');

switchKey.addEventListener("change", () => {
  body.classList.toggle("darkMode");
  container.classList.toggle("darkMode");
});




