/*
 * Day-by-Day-Challenge
 * Exercice 002 - "validation"

* Task
 *------------
 * Implement conditions that will verify that the passed password meets the specified conditions:
 *
 * a) Length from 3 to 10 characters
 * b) Contains one of the special characters - !, @ or #
 * c) Contains a number
 *
 * Example:
 * validatePassword('test') // => false
 * validatePassword('test11!') // => true
 */

/*
 * Bonus
 *-----------------
 * The function should verify that the passed parameter is of the string type. If
 *  the parameter is not satisfies this condition, the function should raise an
 *  exception
 */

function validatePassword(password) {
  if (typeof password !== "string") {
    throw new Error("input need to be string type");
  }
  const passwordLength = password.length >= 3 && password.length <= 10;
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const symbols = ["-", "!", "#", "@"];
  const foundDigit = digits.some((digit) => password.includes(digit));
  const foundSymbol = symbols.some((symbol) => password.includes(symbol));

  return passwordLength && foundDigit && foundSymbol;
}

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(validatePassword(""), false);
verify(validatePassword("lol"), false);
verify(validatePassword("ItWorks3#"), true);
