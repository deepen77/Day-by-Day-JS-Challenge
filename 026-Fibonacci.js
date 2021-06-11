/*
Day-by-Day-Challenge
Exercice 026 - "Fibonacci"

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

*/


function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}



//Verification

// function verify(input, goal) {
//   input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
//   if (input == goal) {
//     console.log("Congratulation!");
//   } else {
//     console.log(`Sorry, expected - ${goal}, received - ${input}`);
//   }
// }

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


verify(productFib(4895), [55, 89, true]);
verify(productFib(5895), [89, 144, false]);
verify(productFib(74049690), [6765, 10946, true]);
verify(productFib(84049690), [10946, 17711, false]);
verify(productFib(193864606), [10946, 17711, true]);
verify(productFib(447577), [610, 987, false]);
verify(productFib(602070), [610, 987, true]);
