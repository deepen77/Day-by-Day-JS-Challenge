/*
Day-by-Day-Challenge
Exercice 024 - "2clock"

Task
------------
Clock shows h hours, m minutes and s seconds after midnight.
Your task is to write a function which returns the time since midnight in milliseconds.

Example
h = 0
m = 1
s = 1

result = 61000
*/

// function past (h, m, s) {
//     const minutes = h * 60 + m;
//     const seconds = minutes * 60 + s;
//     return seconds * 1000;
// }

const past = (h, m, s) => {
   return  ((h * 60 * 60) + (m * 60) + s) * 1000;
}


//Verification

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(past(0, 1, 1), 61000);
verify(past(1, 1, 1), 3661000);
verify(past(0, 0, 0), 0);
verify(past(1, 0, 1), 3601000);
verify(past(1, 0, 0), 3600000);