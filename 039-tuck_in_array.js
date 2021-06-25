/*
Day-by-Day-Challenge
Exercice 037 - "are the numbers equal"

Task
------------

Create a function that takes two arrays and insert the second array in the middle of the first array.

Examples
tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

tuckIn([15,150], [45, 75, 35]) ➞ [15, 45, 75, 35, 150]

tuckIn([[1, 2], [5, 6]], [[3, 4]]) ➞ [[1, 2], [3, 4], [5, 6]]

*/

// function tuckIn(arr1, arr2) {
//   arr2.push(arr1[1]);
//   arr2.unshift(arr1[0]);
//   return arr2;
// }

function tuckIn(arr1, arr2) {
  return [arr1[0], ...arr2, arr1[1]];
}

function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}





verify(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]),[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
verify(tuckIn([15,150], [45, 75, 35]),[15, 45, 75, 35, 150]);
verify(tuckIn([[1, 2], [5, 6]], [[3, 4]]),[[1, 2], [3, 4], [5, 6]]);