/*
Day-by-Day-Challenge
Exercice 028 - "find highest number"

Task
------------
Create your own function/method to find highest number

*/


function findMax(...numbers) {
    let max = -Infinity;
    numbers.forEach((num) => {
        if(num >= max) max = num;
    });
    return max;
}


function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(findMax(10, -4, 6, 12, 3, -1, 0),12);
verify(findMax(0, 100, 500, -105, -102, 30), 500); 
verify(findMax(7, 7.9, -7.9, 7.3, 7.99, -7.78), 7.99); 