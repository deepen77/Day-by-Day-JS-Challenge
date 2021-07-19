/*
Day-by-Day-Challenge
Exercice 064 - "Names on J"

Task
------------
Description:
Create function when it return names from array only beginning J letter

*/

const names = ["John", "Brian", "Jane", "Alex"];

const nameJ = names.reduce((prev, curr) => {
  if (curr[0] === "J") {
    return `${prev} ${curr}`;
  } else {
    return prev;
  }
}, "");

console.log(nameJ);
