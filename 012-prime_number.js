/*
Day-by-Day-Challenge
Exercice 012 - "prime number"

Task
------------

Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prim
Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 (or similar, depends on language version). Looping all the way up to n, or n/2, will be too slow.

Example
is_prime(1)  / false /
is_prime(2)  / true  /
is_prime(-1) /false /

*/


function isPrime(num) {
  let result = true;
  if (num < 2) {
    return false;
  } else if (num === 2) {
    return true;
  }
  if (num % 2 === 1) {
    for (let i = 2; i <= Math.ceil(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
}

//Verification

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(isPrime(0), false, "0 is not prime");
verify(isPrime(1), false, "1 is not prime");
verify(isPrime(2), true, "2 is prime");
verify(isPrime(73), true, "73 is prime");
verify(isPrime(75), false, "75 is not prime");
verify(isPrime(-1), false, "-1 is not prime");