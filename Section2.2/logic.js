const module = document.querySelector(".module");
const closeButton = module.querySelector(".close-module");

const cards = document.querySelectorAll(".card");
console.log(cards);

for (let i = 0; i < cards.length; i += 1) {
   cards[i].addEventListener("click");
}
