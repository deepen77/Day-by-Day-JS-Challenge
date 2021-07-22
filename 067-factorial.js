/*
Day-by-Day-Challenge
Exercice 067 - "Factorial"

Task
------------
Description:
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw  a RangeError
*/







factorial = n => {
  if (n < 0 || n > 12) throw RangeError;
  return n > 1 ? n * factorial(n - 1) : 1;
}


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}




verify(factorial(0), 1, "factorial for 0 is 1"),
  verify(factorial(1), 1, "factorial for 1 is 1"),
  verify(factorial(2), 2, "factorial for 2 is 2"),
  verify(factorial(3), 6, "factorial for 3 is 6"),
  verify(factorial(4), 24, "factorial for 4 is 24"),
  verify(factorial(5), 120, "factorial for 5 is 120"),
  verify(factorial(6), 720, "factorial for 6 is 720"),
  verify(factorial(7), 5040, "factorial for 7 is 5040"),
  verify(factorial(8), 40320, "factorial for 8 is 40320"),
  verify(factorial(9), 362880, "factorial for 9 is 362880"),
  verify(factorial(10), 3628800, "factorial for 10 is 3628800"),
  verify(factorial(11), 39916800, "factorial for 11 is 39916800"),
  verify(factorial(12), 479001600, "factorial for 12 is 479001600"),
  expectError("Should throw RangeError", function() {factorial(-1); }),
  expectError("Should throw RangeError", function() {factorial(-100); }),
  expectError("Should throw RangeError", function() {factorial(22); })