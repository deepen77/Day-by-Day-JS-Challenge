/*
Day-by-Day-Challenge
Exercice 013 - "pangram"

Task
------------
Implement a function that will check if the given parameter is a so-called pangram.
 
A pangram is an understandable sentence that uses all the letters of the given alphabet.


Example:

isPangram('test') // => false
isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true

 Bonus
 -----------------
Verify that a specific letter appears only once in the given sentence
 */


function isPangram(sentence) {
  //const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
  const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż".split("");
  const lowercase = sentence.toLowerCase();
  return alphabet.every((x) => lowercase.includes(x));
}

function numbersOfLetters(sentence, letter) {
  let lettersCount = 0;
  for (let position = 0; position < sentence.length; position++) {
    if (sentence.charAt(position) == letter) {
      lettersCount += 1;
    }
  }
  return lettersCount;
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

function verifyIfLetterOnlyOneTime(input, letter) {
  if (input === 1) {
    console.log(`this sentence has no repeating letter ${letter}`);
  } else {
    console.log(
      `Unfortunately, one letter was expected only ${letter}, received - ${input}`
    );
  }
}

verify(isPangram("test"), false);
verify(isPangram("Dość gróźb fuzją, klnę, pych i małżeństw!"), true);
verify(isPangram("Dość gróźb fuzją, klnę, pych i małże!"), false);

verifyIfLetterOnlyOneTime(numbersOfLetters("test", "t"), "t");
verifyIfLetterOnlyOneTime(
  numbersOfLetters("Dość gróźb fuzją, klnę, pych i małżeństw!", "f"),
  "f"
);
verifyIfLetterOnlyOneTime(
  numbersOfLetters("Dość gróźb fuzją, klnę, pych i małże!", "o"),
  "o"
);