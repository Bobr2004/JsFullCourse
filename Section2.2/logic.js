const module1 = document.querySelector(".module");
const overlay = document.querySelector(".overlay");
const closeButton = module1.querySelector(".close-module");
const cards = document.querySelectorAll(".card");

const changeDisplay = function (parameter) {
   return function () {
      if (parameter === "show") {
         module1.classList.remove("hidden");
      } else if (parameter === "hide") {
         module1.classList.add("hidden");
      }
   };
};

for (let i = 0; i < cards.length; i += 1) {
   cards[i].addEventListener("click", changeDisplay("show"));
}

closeButton.addEventListener("click", changeDisplay("hide"));
overlay.addEventListener("click", changeDisplay("hide"));

document.addEventListener("keydown", function (event) {
   console.log(event.key);

   if (!module1.classList.contains("hidden") && event.key === "Escape") {
      console.log("oleg");
      changeDisplay("hide")();
   }
});
