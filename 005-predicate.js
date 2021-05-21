/*
 * Day-by-Day-Challenge
 * Exercice 005 - "predicates"

* Task
 *------------
 * Implement function that as parameter takes an array of elements and a predicate
 *
 * The predicate will be a function that includes an element from the given array as a parameter * and I will take the value true or false.

 * The function should return a new array containing only elements that meet the given condition, * don' use the built-in filter or map methods.
 *
 * 
 * 
 * Example:
 * applyPredicate([1, 2, 3], element => element > 2) // => [3]
 * applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)) // => ['b', 'c']
 */

 function applyPredicate(elements, predicate) {
   const matched = [];
   elements.forEach((element) => {
     if (predicate(element)) {
       matched.push(element);
     }
   });
   return matched;
 }

 function verify(input, goal) {
   const inputAsString = JSON.stringify(input);
   const goalAsString = JSON.stringify(goal);

   if (inputAsString === goalAsString) {
     console.log("Congratulation!");
   } else {
     console.log(
       `Sorry, expected - ${goalAsString}, received - ${inputAsString}`
     );
   }
 }

 verify(
   applyPredicate([1, 2, 3], (element) => element > 2),
   [3]
 );
 verify(
   applyPredicate(["a", "b", "c"], (element) => ["b", "c"].includes(element)),
   ["b", "c"]
 );
 verify(
   applyPredicate(["x", "y"], (element) => element === "z"),
   []
 );