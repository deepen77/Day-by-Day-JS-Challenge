/*
Day-by-Day-Challenge
Exercice 052 - "Sum of array"

Task
------------
Description:

Take an indifferent number of numbers for the sum function that will sum all the numbers and return them in the console

*/

const sum = (...args) => {
  let sumAll = 0;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      console.log("All elements must be numbers!");
      return;
    }
    sumAll += args[i];
  }
  return sumAll;
};

console.log(sum(1));
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 8));
console.log(sum(1, 8, 10));
console.log(sum(1, 3, 5));
