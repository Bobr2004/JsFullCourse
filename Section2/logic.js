const check = document.querySelector(".form input[type='button']");
const val = document.querySelector(".form input[type='number']");
const statusField = document.querySelector(".status");
const score = document.querySelector(".score .result");
score.textContent = 20;
const highlight = document.querySelector(".highlight .result");
highlight.textContent = 0;
let guess;

const again = document.querySelector(".again");

const DecreaseScore = function () {
   score.textContent -= 1;
};
const AddToHighscore = function () {
   highlight.textContent =
      Number(highlight.textContent) + Number(score.textContent);
};
const genereteRandom = function (min, max) {
   let diff = max - min;
   return min + Math.floor(Math.random() * (diff + 1));
};

const changeDisplay = function (el) {
   el.classList.toggle("active");
};

guess = genereteRandom(1, 20);

const changeStatus = function (val) {
   statusField.textContent = val;
};

again.addEventListener("click", function () {
   score.textContent = 20;
   guess = genereteRandom(1, 20);
   changeDisplay(again);
   changeDisplay(check);
});

check.addEventListener("click", function () {
   if (score.textContent <= 0) {
      changeStatus("End! You lost hehehaha!");
      changeDisplay(again);
      changeDisplay(check);
      return;
   }
   if (!val.value) {
      changeStatus("No value. You sussy baka");
   } else if (Number(val.value) === guess) {
      changeStatus("Correct! You won!");
      AddToHighscore();
      changeDisplay(again);
      changeDisplay(check);
   } else {
      DecreaseScore();
      changeStatus(
         Number(val.value) > guess
            ? "To big woltuh!"
            : "Put your big ass d back woltuh, that's to small"
      );
   }
});
