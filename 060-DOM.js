const btn = document.querySelector(".btn-toggle-color");
let counter = document.querySelector(".counter")
const body = document.body;



btn.addEventListener("click", () => {
  const isDarkMode = body.classList.toggle("dark-mode");
  counter.innerText++
  

  if (isDarkMode) {
    btn.innerText = "Turn on light mode";
  } else {
    btn.innerText = "Turn on dark mode";
  }
});
