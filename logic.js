const roll = document.querySelector(".roll");
const points = document.querySelectorAll(".dice > div");

// Functions
const generateRandom = function (min, max) {
   let diff = max - min;
   return min + Math.floor(Math.random() * (diff + 1));
};

const showPoint = function (i) {
   points[i - 1].classList.add("shown");
};

const showPoints = function (dice) {
   return function () {
      switch (dice) {
         case 1:
            showPoint(1);
            break;
         case 2:
            showPoint(2);
            showPoint(3);
            break;
         case 3:
            showPoint(1);
            showPoint(2);
            showPoint(3);
            break;

         case 4:
            showPoint(4);
            showPoint(2);
            showPoint(3);
            showPoint(5);
            break;

         case 5:
            showPoint(1);
            showPoint(4);
            showPoint(2);
            showPoint(3);
            showPoint(5);
            break;

         case 6:
            showPoint(6);
            showPoint(4);
            showPoint(2);
            showPoint(3);
            showPoint(5);
            showPoint(7);
            break;
      }
   };
};

const diceRoll = function () {
   document.querySelector(".dice > i").style.opacity = "0";
   let dice = generateRandom(1, 6);
   for (let i = 0; i < points.length; i += 1) {
      points[i].classList.remove("shown");
   }
   localStorage.setItem("diceResult", String(dice));
   setTimeout(showPoints(dice), 500);
};

if (localStorage.getItem("diceResult")) {
   document.querySelector(".dice > i").style.opacity = "0";
   showPoints(Number(localStorage.getItem("diceResult")))();
}

roll.addEventListener("click", diceRoll);
window.addEventListener("keydown", (event) => {
   if (event.key === "Escape") {
      console.log("oleg");
      localStorage.clear();
      for (let i = 0; i < points.length; i += 1) {
         points[i].classList.remove("shown");
      }
      document.querySelector(".dice > i").style.opacity = "0.7";
   }
});
