/*
Day-by-Day-Challenge
Exercice 033 - "how much is true"

Task
------------
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0

*/

const countTrue = (r) => r.filter(Boolean).length;


function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(countTrue([true, false, false, true, false]),2)
verify(countTrue([false, false, false, false]),0)
verify(countTrue([]),0)
