/*
Day-by-Day-Challenge
Exercice 044 - "A chain adding function"

Task
------------
Description:
We want to create a function that will add numbers together when called in succession.

add(1)(2);
// returns 3
We also want to be able to continue to add numbers to our chain.

add(1)(2)(3); // 6
add(1)(2)(3)(4); // 10
add(1)(2)(3)(4)(5); // 15
and so on.

A single call should return the number passed in.

add(1); // 1
We should be able to store the returned values and reuse them.

var addTwo = add(2);
addTwo; // 2
addTwo + 5; // 7
addTwo(3); // 5
addTwo(3)(5); // 10
*/

function add(n) {
  const fn = function (x) {
    return add(n + x);
  };

  fn.valueOf = function () {
    return n;
  };

  return fn;
}

function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}



verify((add(1)(2) == 3), true);
verify((add(1)(2)(3) == 6), true);
verify((add(1)(2)(3)(4) == 10), true);
verify((add(1)(2)(3)(4)(5) == 15),true);