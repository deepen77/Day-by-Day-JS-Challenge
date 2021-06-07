/*
Day-by-Day-Challenge
Exercice 022 - "ISBN verification"

/*
 * Introducing
 *------------
Books are identified by ISBN-10 numbers. These numbers usually contain dashes, and look like this: 99921-58-10-7

ISBN-10 consists of 9 digits (0 to 9) and one check character (digit or X). The X check character represents the number 10.

 The verification algorithm is as follows:
 (x1 * 10 + x2 * 9 + x3 * 8 + x4 * 7 + x5 * 6 + x6 * 5 + x7 * 4 + x8 * 3 + x9 * 2 + x10 * 1) % 11 == 0
 
 
 Example: 
 Let's take ISBN: 85-359-0277-5
 (8 * 10 + 5 * 9 + 3 * 8 + 5 * 7 + 9 * 6 + 0 * 5 + 2 * 4 + 7 * 3 + 7 * 2 + 5 * 1) % 11 == 0
The algorithm confirms the correctness of this ISBN-10

Task
------------
Based on the algorithm presented above, write a checking function passed in the form of an ISBN string. The function should handle ISBN with and without dashes.
 */

function checkISBN(isbn) {
  const filteredIsbn = isbn.replace(/[^\w]/g, "");
  const isbnArr = filteredIsbn.split("");
  let factor = 10;
  const multipliedIsbn = [];

  for (let i = 0; i < 10; i++) {
    multipliedIsbn.push(isbnArr[i] * factor);
    factor--;
  }

  const sum = multipliedIsbn.reduce((prev, current) => {
    return prev + current;
  }, 0);

  if (sum % 11 !== 0) return false;

  return true;
}

/* Verification */

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(checkISBN("85-359-0277-5"), true);
verify(checkISBN("8535902775"), true);
verify(checkISBN("99921-58-10-3"), false);
verify(checkISBN("9992158103"), false);
