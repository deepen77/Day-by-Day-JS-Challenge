/*
Day-by-Day-Challenge
Exercice 035 - "basketball points"

Task
------------
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5
points(7, 5) ➞ 29
points(38, 8) ➞ 100

*/

function points(twoPointers, threePointers) {
  return twoPointers * 2 + threePointers * 3;
}

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(points(1, 1),5)
verify(points(7, 5),29)
verify(points(38, 8),100)
