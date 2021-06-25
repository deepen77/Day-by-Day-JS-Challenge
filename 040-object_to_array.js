/*
Day-by-Day-Challenge
Exercice 040 - "Converting Objects to Arrays"

Task
------------
Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

Examples
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

toArray({}) ➞ []
*/

function toArray(obj) {
  return Object.entries(obj);
}

function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}



verify(toArray({ a: 1, b: 2 }),[["a", 1], ["b", 2]])
verify(toArray({ shrimp: 15, tots: 12 }),[["shrimp", 15], ["tots", 12]])
verify(toArray({}),[])