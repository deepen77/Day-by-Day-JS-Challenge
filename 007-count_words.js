/*
 * Day-by-Day-Challenge
 * Exercice 007 - "count words"

* Task
 *------------
* When receiving a sentence as an input parameter, return an object that will contain the number of occurrences of each word in the sentence. Ignore whether the word is uppercase or lowercase.
*
* 
*
* Example:
* countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda"); // => {
  nauka: 1,
  javascript: 2,
  z: 1,
  kursem: 1,
  opanuj: 1,
  to: 1,
  frajda: 1
}
* 
* 
*/

function countWords(sentence) {
  const symbols = RegExp(/[,]/g);
  sentence = sentence.toLowerCase().replace(symbols, "");
  return sentence.split(" ").reduce(function (acc, word) {
    acc[word] ? ++acc[word] : (acc[word] = 1);
    return acc;
  }, Object.create(null));
}

/* Verification */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(", ") : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(
  JSON.stringify(
    countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")
  ),
  JSON.stringify({
    nauka: 1,
    javascript: 2,
    z: 1,
    kursem: 1,
    opanuj: 1,
    to: 1,
    frajda: 1,
  })
);
verify(
  JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")),
  JSON.stringify({
    tanie: 2,
    wino: 1,
    jest: 2,
    dobre: 2,
    bo: 1,
    i: 1,
  })
);
