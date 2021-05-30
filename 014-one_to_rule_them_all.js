/*
Day-by-Day-Challenge
Exercice 014 - "one to rule them all"

Task
------------

Implement the rule () function, that all the arrays passed to it are merged into one 
Example:
rule([1, 2], [5, 6]) // => [1, 2, 5 , 6];

 Bonus
-----------------
Use the rest operator
Record the solution in one line
 */

// function rulez(...elements) {
//   return [...elements].flat();
// }

const rulez = (...elements) => [...elements].flat();

/* Verification */

function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(
      `Sorry, expected - ${JSON.stringify(goal)}, received - ${JSON.stringify(
        input
      )}`
    );
  }
}

verify(rulez([1, 5], [6, 1]), [1, 5, 6, 1]);
verify(rulez([1], [2], [3], [4], [5], [6]), [1, 2, 3, 4, 5, 6]);
