/*
Day-by-Day-Challenge
Exercice 037 - "are the numbers equal"

Task
------------

You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Examples
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false

*/



function isFirstSuperior(arr1, arr2) {
  return arr1 > arr2;
}





function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]),true)
verify(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]),true)
verify(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]),false)
verify(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]),false)