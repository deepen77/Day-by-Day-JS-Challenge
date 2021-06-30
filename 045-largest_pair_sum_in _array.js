/*
Day-by-Day-Challenge
Exercice 045 - "Largest pair sum in array"

Task
------------
Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)

*/

function largestPairSum(numbers) {
  numbers.sort(function (a, b) {
    return b - a;
  });
  return numbers[0] + numbers[1];
}


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(largestPairSum([10, 14, 2, 23, 19]), 42)
verify(largestPairSum([-100, -29, -24, -19, 19]),0)
verify(largestPairSum([1, 2, 3, 4, 6, -1, 2]),10)
verify(largestPairSum([-10, -8, -16, -18, -19]),-18)
