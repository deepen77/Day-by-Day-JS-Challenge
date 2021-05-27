/*
 * Day-by-Day-Challenge
 * Exercice 011 - "rectangle parimeter"

* Task
*------------
Find the Perimeter of a Rectangle
Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
*/

function findPerimeter(length, width) {
return (length * 2) + (width * 2);
}

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(findPerimeter(6, 7), 26);
verify(findPerimeter(20, 10), 60);
verify(findPerimeter(2, 9), 22);