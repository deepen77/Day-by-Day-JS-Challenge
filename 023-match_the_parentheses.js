/*
Day-by-Day-Challenge
Exercice 023 - "match the parentheses"

Task
------------
When you get a string containing square brackets [], braces {}, or parentheses (), make sure that all of the pairs are matched and correctly nested. If everything is correct, return true. If errors are detected, return false.

Example: '[{()}]' => true
  
Example: '[{]}' => false
 */

function checkBrackets(stringWithBrackets) {
  let checkedOperationBrackets = stringWithBrackets;
  let checkedBrackets = "";
  const allBracketsREGEX = /\(\)|{}|\[\]/g;
  do {
    checkedBrackets = checkedOperationBrackets;
    checkedOperationBrackets = checkedOperationBrackets.replace(
      allBracketsREGEX,
      ""
    );
  } while (!Object.is(checkedOperationBrackets.length, checkedBrackets.length));
  return Object.is(checkedOperationBrackets.length, 0);
}
/* Verification */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(checkBrackets("[{()}]"), true);
verify(checkBrackets("[{]}"), false);
verify(checkBrackets("()[{}]"), true);
verify(checkBrackets("{[(]}}"), false);
verify(checkBrackets("[{()]}"), false);
verify(checkBrackets("[]{})("), false);
verify(checkBrackets("()([{})]"), false);
