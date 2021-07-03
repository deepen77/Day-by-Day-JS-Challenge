/*
Day-by-Day-Challenge
Exercice 049 - "Prompt Calculator"

Task
------------
Description:
make a simple calculator. ask the user for the first number, the second number and the sign. Then use the if statement to do one of the actions

a+b
a-b
a*b
a/b
*/


const numberOne = prompt("Enter first number")
const numberTwo = prompt("Enter second number");
const sign = prompt("Choose operation");


if(sign === "+"){
console.log(parseInt(numberOne) + parseInt(numberTwo))
}
if (sign === "-") {
  console.log(parseInt(numberOne) - parseInt(numberTwo));
}
if (sign === "*") {
  console.log(parseInt(numberOne) * parseInt(numberTwo));
}
if (sign === "/") {
  if(numberTwo === 0) {
    console.log(`Sorry, you can't divide by 0`);
  }else {
    console.log(parseInt(numberOne) / parseInt(numberTwo));
  }
}
