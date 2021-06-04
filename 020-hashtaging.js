/*
Day-by-Day-Challenge
Exercice 020 - "hashtaging"

Task
------------
 Implement a function that searches for hashtags in a sentence
 
 
 Examples:
 findTags('W 2020 #opanujeJS'); // => opanujeJS
 findTags('Za chwilę dodam #opanujeJS!'); // => opanujeJS
 findTags('Lubię tagować #yolo #love#happy #h3cker'); // => yolo, love, happy, h3cker
 */

function findTags(message) {
  const exceptions = /(?<=[#])[\w]+/g;
  return message.match(exceptions) || [];
}

/* Weryfikacja */

function verify(input, goal) {
  input = Array.isArray(input) ? input.join(", ") : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(findTags("I'm looking for #bread"), "bread");
verify(findTags("Im going #home!"), "home");
verify(
  findTags("I like hastaging #yolo #love#happy #h3cker"),
  "yolo, love, happy, h3cker"
);
