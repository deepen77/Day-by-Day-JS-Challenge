/*
Day-by-Day-Challenge
Exercice 067 - "Factorial"

Task
------------

Description:
INTRODUCTION
The Club Doorman will give you a word. To enter the Club you need to provide the right number according to provided the word.

Every given word has a doubled letter, like 'tt' in lettuce.

To answer the right number you need to find the doubled letter's position of the given word in the alphabet and multiply this number per 3.

It will be given only words with one doubled letter.


EXAMPLE
Lettuce is the given word. 't' is the doubled letter and it's position is 20 in the alphabet.

The answer to the Club Doorman is 20 * 3 = 60


TASK
The function passTheDoorMan with a given string word shall return the right number.

*/

function passTheDoorMan(word) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let letter;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === word[i + 1]) {
      letter = word[i];
    }
  }
  return (alphabet.indexOf(letter) + 1) * 3;
}


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(passTheDoorMan("lettuce"), 60);
verify(passTheDoorMan("hill"), 36);
verify(passTheDoorMan("apple"), 48);
verify(passTheDoorMan("addiction"), 12);
verify(passTheDoorMan("bee"), 15);
verify(passTheDoorMan("zz"), 78);