"use strict";

//Html Elements
const rollDice = document.getElementById("roll-dice");
const adviceNumber = document.getElementById("advice-number");
const adviceParagraph = document.getElementById("advice");
const url = "https://api.adviceslip.com/advice";

//Dice button logic
rollDice.addEventListener("click", () => {
  fetch(url, {cache: "no-cache"})
    .then((response) => response.json())
    .then(
      (data) => (
        (adviceNumber.textContent = data.slip.id),
        (adviceParagraph.textContent = data.slip.advice)
      )
    );
});



