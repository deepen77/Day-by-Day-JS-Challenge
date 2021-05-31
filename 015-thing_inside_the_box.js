/*
Day-by-Day-Challenge
Exercice 015 - "thing inside the box"

Task
------------
 Implement a function that checks if the box is empty.
 */

function thing(box) {
  box = [...box].filter((el) => {
    if (el !== " ") return el;
  });
  return box.join("").includes("*o*") ? true : false;
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(
  thing(`*****
              *   * o
              *   *
              *****`),
  false
);

verify(
  thing(`*****
              * o *
              *   *
              *****`),
  true
);

verify(
  thing(`*****
               *   *
               *   *
               *****`),
  false
);
