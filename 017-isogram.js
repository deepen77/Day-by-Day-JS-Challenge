/*
Day-by-Day-Challenge
Exercice 017 - "isogram"

Task
------------
Implement a function that checks if a given word is an isogram, i.e. a word in which each letter appears only once.
 
 
 Examples:
isogram('Izogram'); // => true
isogram('MamaMia'); // => false

 */

function isogram(word) {
  word = word.toLowerCase();
  word = [...word];
  const repeatedItems = [];
  const tempArray = word.sort();
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i + 1] === tempArray[i]) {
      repeatedItems.push(tempArray[i]);
    }
  }
  return repeatedItems.length === 0;
  // if (repeatedItems.length === 0) {
  //     return true
  // }
  // else {
  //     return false
  // }
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(isogram("izogram"), true);
verify(isogram("MamaMia"), false);
verify(isogram("Check"), false);
verify(isogram("abc"), true);
verify(isogram("Hello"), false);

