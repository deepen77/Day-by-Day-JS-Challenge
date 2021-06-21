/*
Day-by-Day-Challenge
Exercice 036 - "largest swap"

Task
------------
Write a function that takes a two-digit number and determines if it's the largest of two possible digit swaps.

To illustrate:

largestSwap(27) ➞ false

largestSwap(43) ➞ true
If 27 is our input, we should return false because swapping the digits gives us 72, and 72 > 27. On the other hand, swapping 43 gives us 34, and 43 > 34.

Examples
largestSwap(14) ➞ false
largestSwap(53) ➞ true
largestSwap(99) ➞ true

*/

//sollution 1
// function largestSwap(num) {
// 	return num / 10 > num % 10
// }

//solution 2

const largestSwap = (num) => Number(num.toString().split('').reverse().join('')) <= num;




function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(largestSwap(14),false)
verify(largestSwap(53),true)
verify(largestSwap(99),true)