"use strict";

//Html Elements
const rollDice = document.getElementById("roll-dice");
const adviceNumber = document.getElementById("advice-number");
const adviceParagraph = document.getElementById("advice");
const url = "https://api.adviceslip.com/advice";


//start api
// Old way 
// async function getAdvice() {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     return await data;
//   } catch (e) {
//     console.error(e);
//   }
// }
// // Old way 
// rollDice.addEventListener("click", () => {
//     getAdvice().then((data)=> adviceNumber.textContent = data.slip.id);
//     getAdvice().then((data)=> adviceParagraph.textContent = data.slip.advice);

// });

// console.log(getAdvice());

// Latest way 

//Dice button logic
rollDice.addEventListener("click", () => {
  fetch(url)
    .then((response) => response.json())
    .then(
      (data) => (
        (adviceNumber.textContent = data.slip.id),
        (adviceParagraph.textContent = data.slip.advice)
      )
    );
});



