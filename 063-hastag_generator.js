/*
Day-by-Day-Challenge
Exercice 063 - "Hastah Generator"

Task
------------
Description:

The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

*/

function generateHashtag(string) {
  if (string.trim() === "") return false;

  const stringWithCamelCase = string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  return stringWithHashtag.length > 140 ? false : stringWithHashtag;
}

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(generateHashtag(""), false, "Expected an empty string to return false");
verify(generateHashtag(" ".repeat(200)), false, "Still an empty string");
verify(
  generateHashtag("Do We have A Hashtag"),
  "#DoWeHaveAHashtag",
  "Expected a Hashtag (#) at the beginning."
);
verify(
  generateHashtag("Codewars"),
  "#Codewars",
  "Should handle a single word."
);
verify(
  generateHashtag("Codewars Is Nice"),
  "#CodewarsIsNice",
  "Should remove spaces."
);
verify(
  generateHashtag("Codewars is nice"),
  "#CodewarsIsNice",
  "Should capitalize first letters of words."
);
verify(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars");
verify(
  generateHashtag(
    "Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"
  ),
  false,
  "Should return false if the final word is longer than 140 chars."
);
verify(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work");
verify(generateHashtag("a".repeat(140)), false, "Too long");
