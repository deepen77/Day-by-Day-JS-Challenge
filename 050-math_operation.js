/*
Day-by-Day-Challenge
Exercice 050 - "Math Operations"

Task
------------
Description:

Write a function that displays the multiplication, division, addition and subtraction results for the two numbers entered via propmt on the console.
Make sure the passed values are numbers.
Try to use the notation with function, then with the arrow function
*/
const num1 = prompt("Enter first number");
const num2 = prompt("Enter second number");

//funtion declaration

// function mathOperation(num1, num2) {
//   num1 = parseInt(num1);
//   num2 = parseInt(num2);
//   if (!isNaN(num1) && !isNaN(num2)) {
//     const add = num1 + num2;
//     const sub = num1 - num2;
//     const multi = num1 * num2;
//     let div;
//     if (num2 === 0) {
//       div = "we can't divide by zero";
//     }else{
//      div = num1 / num2;
//     }
//     console.log(
//       `add result ${num1} + ${num2} = ` + add,
//       "\n",
//       `sub result ${num1} - ${num2} = ` + sub,
//       "\n",
//       `multi result ${num1} * ${num2} = ` + multi,
//       "\n",
//       `div result ${num1} / ${num2} = ` + div
//     );
//   } else {
//     alert("Numbers are requaried");
//   }
// }

//arrow function

const mathOperation = (num1, num2) => {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (!isNaN(num1) && !isNaN(num2)) {
    const add = num1 + num2;
    const sub = num1 - num2;
    const multi = num1 * num2;
    let div;
    if (num2 === 0) {
      div = "we can't divide by zero";
    } else {
      div = num1 / num2;
    }
    console.log(
      `add result ${num1} + ${num2} = ` + add,
      "\n",
      `sub result ${num1} - ${num2} = ` + sub,
      "\n",
      `multi result ${num1} * ${num2} = ` + multi,
      "\n",
      `div result ${num1} / ${num2} = ` + div
    );
  } else {
    alert("Numbers are requaried");
  }
};

mathOperation(num1, num2);