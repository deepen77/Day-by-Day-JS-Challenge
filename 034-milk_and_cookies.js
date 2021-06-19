/*
Day-by-Day-Challenge
Exercice 034 - "milk and cookies"

Task
------------
Is it Time for Milk and Cookies?
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples
timeForMilkAndCookies(new Date(2013, 11, 24)) ➞ true

timeForMilkAndCookies(new Date(2013, 0, 23)) ➞ false

timeForMilkAndCookies(new Date(3000, 11, 24)) ➞ true

*/

function timeForMilkAndCookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}


function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}



verify(timeForMilkAndCookies(new Date(2013, 11, 24)),true)
verify(timeForMilkAndCookies(new Date(2013, 0, 23)),false)
verify(timeForMilkAndCookies(new Date(3000, 11, 24)),true)