/*
Day-by-Day-Challenge
Exercice 043 - "Odd or even"

Task
------------

Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"

*/

//Solution 1
// function oddOrEven(arr) {
//   return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
// }


//Solution 2

// const oddOrEven = (array) =>
//   array.filter((val) => val & 1).length & 1 ? `odd` : `even`;

//Solution 3

function oddOrEven(array) {
  if (array == 0) return "even";
  let sum = array.reduce((a, b) => a + b);

  if (sum % 2 == 0) {
    return "even";
  } else return "odd";
}


function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}



    verify(oddOrEven([0]), 'even')
    verify(oddOrEven([1]), 'odd')
    verify(oddOrEven([]), 'even')
    verify(oddOrEven([0, 1, 5]), 'even')
    verify(oddOrEven([0, 1, 3]), 'even')
    verify(oddOrEven([1023, 1, 2]), 'even')
    verify(oddOrEven([0, -1, -5]), 'even')
    verify(oddOrEven([0, -1, -3]), 'even')
    verify(oddOrEven([-1023, 1, -2]), 'even')
    verify(oddOrEven([0, 1, 2]), 'odd')
    verify(oddOrEven([0, 1, 4]), 'odd')
    verify(oddOrEven([1023, 1, 3]), 'odd')
    verify(oddOrEven([0, -1, 2]), 'odd')
    verify(oddOrEven([0, 1, -4]), 'odd')
    verify(oddOrEven([-1023, -1, 3]), 'odd')