/*
 * Day-by-Day-Challenge
 * Exercice 003 - "factory"

* Task
 *------------
 * Modify the factory function so that the variable quote is available as * a property.
 */

/*
"use strict";
function factory() {
  this.quote = "Cool!";

  return this;
}

verify(factory().quote, "Cool!");
*/

const factory = {
  quote: "Cool!",
};



verify(factory.quote, "Cool!");


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}
