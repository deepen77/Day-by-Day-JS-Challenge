/*
 * Day-by-Day-Challenge
 * Exercice 010 - "next number"

* Task
 *------------
 * Create a function that takes a number as an argument, increments the number by +1 and returns * the result.
 *
 *
 * Examples:
 * addition(0) ➞ 1
 * addition(9) ➞ 10
 * addition(-3) ➞ -2
 *
 */

function addition(num) {
  return num + 1;
}

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(addition(2), 3);
verify(addition(-9), -8);
verify(addition(0), 1);
