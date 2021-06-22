/*
Day-by-Day-Challenge
Exercice 037 - "are the numbers equal"

Task
------------
Create a function that returns true when num1 is equal to num2; otherwise return false.

Examples
isSameNum(4, 8) ➞ false
isSameNum(2, 2) ➞  true
isSameNum(2, "2") ➞ false
*/

function isSameNum(num1, num2) {
	return num1 === num2
}


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(isSameNum(4, 8),false)
verify(isSameNum(2, 2),true)
verify(isSameNum(2, "2"),false)
