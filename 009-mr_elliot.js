/*
 * Day-by-Day-Challenge
 * Exercice 008 - "swap names"

* Task
 *------------
 * Implement a function to change the text to greetings from Mr. Elliot, according to the example.
 *
 *
 * Examples:
 * greetings('hacker'); // => 'H4Ck3r'
 * greeting('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
 * greeting('Saving The World'); // => 'S4V1Ng tHe w0rLd'
 *
 */

const code = {
  a: 4,
  e: 3,
  o: 0,
  i: 1,
  s: 5,
};

function greeting(message) {
  let newWord = message.toLowerCase();
  const outputMessage = [];

  for (let [key, value] of Object.entries(code)) {
    newWord = newWord.replaceAll(key, value);
  }

  newWord.split("").map((el, index) => {
    index % 2 == 0 && typeof el === "string"
      ? outputMessage.push(el.toUpperCase())
      : outputMessage.push(el.toLowerCase());
  });

  return outputMessage.join("");
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(greeting("hacker"), "H4Ck3r");
verify(greeting("Control Is An Illusion"), "C0NtR0L 15 4N 1lLu510n");
verify(greeting("Saving The World"), "54V1Ng tH3 w0rLd");
