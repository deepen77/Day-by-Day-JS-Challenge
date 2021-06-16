/*
Day-by-Day-Challenge
Exercice 031 - "find missing letter"

Task
------------

Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2. The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)

*/


function findMissingLetter(array) {
  var string = array.join("");
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) != 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}



verify(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
verify(findMissingLetter(["O", "Q", "R", "S"]), "P");