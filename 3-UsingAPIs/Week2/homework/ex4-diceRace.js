'use strict';
/*------------------------------------------------------------------------------
1. Complete the function `rollTheDices()` by using `Promise.race()`.
2. Refactor the function `main()` using async/await and try/catch.
3. Once you got this working, you may observe that some dices continue rolling 
   for some undetermined time after the promise returned by `Promise.race()` 
   resolves. Do you know why? Add your answer as a comment to the bottom of the 
   file.
------------------------------------------------------------------------------*/
// ! Do not remove this line
const rollDice = require('../../helpers/pokerDiceRoller');

function rollTheDices() {
  const dices = [1, 2, 3, 4, 5];
  // TODO complete this function; use Promise.race() and rollDice()
  return Promise.race(dices.map(rollDice));
}

// Refactor this function to use async/await and try/catch
// function main() {
//   rollTheDices()
//     .then((results) => console.log('Resolved!', results))
//     .catch((error) => console.log('Rejected!', error.message));
// }

async function main() {
  try {
    let rollTheDicesResult = await rollTheDices();
    console.log('Resolved!', rollTheDicesResult);
  } catch (error) {
    console.log('Rejected!', error.message);
  }
}

main();

// Promise.any  returns the first settled value whether it is fulfilled or rejected.But the reason of why some dices continue rolling
//   for some undetermined time after the promise returned by `Promise.race()`is not clear for me!

// ! Do not change or remove the code below
module.exports = rollTheDices;
