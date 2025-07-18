
console.log("🛡️ Welcome to Mustapha Lamine Rabehi's Portfolio!");

const text = "Hello, I'm Mustapha Lamine Rabehi";
let i = 0;
function typeEffect() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

const toTopBtn = document.getElementById("toTopBtn");

window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

toTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function changeColor() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === "white" ? "#f5f5f5" : "white";
}
