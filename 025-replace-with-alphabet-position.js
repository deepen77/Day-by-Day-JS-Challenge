/*
Day-by-Day-Challenge
Exercice 025 - "replace with alphabet position"

Task
------------
Replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.

Example
alphabetPosition("The sunset sets at twelve o' clock.") =>
("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" )
*/

function alphabetPosition(text) {
  //split string into array of letters only
  let sentence = text.toLowerCase().split("");
  for (let i = sentence.length - 1; i >= 0; i--) {
    if (sentence[i].match(/[a-z]/) === null) {
      sentence.splice(i, 1);
    }
  }
  //create an array of alphabets (97 represents lower case "a", 65 would be "A")
  let alphaArr = [];
  for (let i = 0; i < 26; i++) {
    alphaArr.push(String.fromCharCode(97 + i));
  }
  //replace each letter with its index in the alphabet
  return sentence.map((item) => alphaArr.indexOf(item) + 1).join(" ");
}


//Verification

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");

verify(
  alphabetPosition("The narwhal bacons at midnight."),
  "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
);