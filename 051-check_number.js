/*
Day-by-Day-Challenge
Exercice 051 - "Check Number"

Task
------------
Description:

Take the number given by the user by the prompt. Change the string to number. Create the checkNumber function to which you pass the number. In the function check if the number is even - if so, return the value from the even function, and if not, then from the odd function.
Create 2 other functions. Even has to return the number he gets, and odd the number he gets multiplied by 2
*/

let number = parseInt(prompt("Enter your number"));

//function declaration

// function checkNumber(number) {
//   if(!isNaN(number)) {
//      if (number % 2 === 0) {
//         return even(number);
//     } else {
//         return odd(number);
//     }
// }else {
//   alert("Number is requaried")
// }
// }

// function even(number) {
//     return number;
// }

// function odd(number) {
//     return number * 2;
// }

//arrow function

const checkNumber = (number) => {
  if (!isNaN(number)) {
    if (number % 2 === 0) {
      return even(number);
    } else {
      return odd(number);
    }
  } else {
    alert("Number is requaried");
  }
};

const even = (number) => number;

const odd = (number = number * 2);

console.log(checkNumber(number));