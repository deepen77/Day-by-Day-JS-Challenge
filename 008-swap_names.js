/*
 * Day-by-Day-Challenge
 * Exercice 008 - "swap names"

* Task
 *------------
* swap the first names so that the surname comes first
*
* 
*
* Example:
* swappedName("Adam Linux"); // => 'Linux Adam'
* 
* 
*/

function swappedName(name) {
  const swapName = name.replace(/(\w+)\s(\w+)/, "$2 $1");
  return swapName;
}

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(swappedName("John Smith"), "Smith John");
verify(swappedName("Alan Bagel"), "Bagel Alan");
verify(swappedName("Mark Spencer"), "Spencer Mark");
