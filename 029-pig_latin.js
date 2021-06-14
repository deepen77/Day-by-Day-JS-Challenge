/*
Day-by-Day-Challenge
Exercice 029 - "pig latin"

Task
------------
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !

*/

function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.substring(1) + word[0] + "ay";
    })
    .join(" ");
}

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
verify(pigIt("This is my string"), "hisTay siay ymay tringsay");