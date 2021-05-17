/*
 * Day-by-Day-Challenge
 * Exercice 001 - "reverse me"

 * Task
 *------------
 * Implement a function that will reverse the string passed to this function
 *
 * Example:
 * reverseMe('abc') // => 'cba'


 * Bonus
 *-----------------
 * The function should verify that the passed parameter is the string type. If the parameter is not
 * satisfies this condition, the function should throw an exception.
 */

function reverseMe(input) {
  if (typeof input !== "string") {
    throw new Error("Wrong type of an argument");
  }
  const splitString = input.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(reverseMe("a"), "a");
verify(reverseMe("abc"), "cba");
verify(reverseMe("Javascript"), "tpircsavaJ");
verify(reverseMe("Brawo!"), "!owarB");
verify(reverseMe("super"), "repus");
