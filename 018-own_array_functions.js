
 /*
Day-by-Day-Challenge
Exercice 018 - "own array functions"

Task
------------
 Implement your own versions of the Array.prototype.length and Array.prototype.filter array functions without using the built-in ones.
 
 
  Example:
 filter([1, 2, 3, 4], isEven); // => [2, 4]
 length([1, 2, 3, 4]); // => 4
 
*/

function filter(array, callback) {
  const newArray = [];
  for (let el of array) {
    if (callback(el)) {
      newArray.push(el);
    }
  }
  return newArray;
}

function length(array) {
  let length = 0;
  for (let el of array) {
    length++;
  }
  return length;
}

/* Verification */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(",") : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(
  filter([1, 2, 3, 4], (el) => el % 2 === 0),
  [2, 4]
);
verify(
  filter([1, 2, 3, 4], (el) => el % 2 !== 0),
  [1, 3]
);
verify(length([1, 2, 3, 4]), 4);
verify(length([]), 0);
