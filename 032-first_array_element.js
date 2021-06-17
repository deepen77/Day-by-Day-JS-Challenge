/*
Day-by-Day-Challenge
Exercice 032 - "first element in array"

Task
------------

Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
*/



/*solution1
function getFirstValue(arr) {
  return arr[0];
}
*/

/*solution2
const getFirstValue = (arr) => arr[0];
*/

//solution 3
const getFirstValue = (arr) => (Array.isArray(arr) ? arr[0] : "error");


function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}




verify(getFirstValue([1, 2, 3]),1)
verify(getFirstValue([80, 5, 100]),80)
verify(getFirstValue([-500, 0, 50]),-500)