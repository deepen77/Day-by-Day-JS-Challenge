/*
Day-by-Day-Challenge
Exercice 059 - "Array with highest value"

Task
------------
Description:

Create function which return sub-array from array with largest value
*/

const array = [
  [1, 19, 3],
  [4, 55, 6],
  [7, 8, 95],
];

function showArrayWithHighestValue(array) {
  let flatten = array.flat();
  let maxnumber = Math.max(...flatten);
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(maxnumber)) {
      return array[i];
    }
  }
}

console.log(showArrayWithHighestValue(array));
