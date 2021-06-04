/*
Day-by-Day-Challenge
Exercice 019 - "flat_arrays"

Task
------------
 Take an array with nested arrays and return a flat array with numeric values with no duplicates and no null / undefined

 Example:
 flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]) => [4, 3, 2, 1, 5]
 
Only expect one level of array nesting
 */

function flattenArray(deepArray) {
  const flat = deepArray.flat().filter((item) => typeof item === "number");

  return [...new Set(flat)];
}

/* Verification */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(", ") : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(
  flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]),
  "4, 3, 2, 1, 5"
);
verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");
