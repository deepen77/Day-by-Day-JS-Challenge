/*
Day-by-Day-Challenge
Exercice 027 - "count smiley facec"

Task
------------
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]

Example
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

function countSmileys(arr) {
  return arr.filter((face) => /[:;]{1}[-~]?[)D]{1}/.test(face)).length;
}


function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

// best practice with reduce 
// const count_smileys = arr => arr.reduce((c, f) => c + /^[:;][-~]?[D)]$/.test(f), 0);


verify(countSmileys([]), 0);
verify(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
verify(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
verify(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);