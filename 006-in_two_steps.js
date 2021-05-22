/*
 * Day-by-Day-Challenge
 * Exercice 006 - "in two steps"

* Task
 *------------
 * Implement a function that will return another function that adds the previously registered 
 * prefix to the passed parameter.
 *
 *
 * Example:
 * const greeting = withPrefix('Witaj, ');
 * greeting('Janek'); // => 'Witaj, Janek'
 * greeting('Tomek'); // => 'Witaj, Tomek'
 *
 * const goodbye = withPrefix('Żegnaj, ');
 * goodbye('Janek'); // => 'Żegnaj, Janek'
 * goodbye('Tomek'); // => 'Żegnaj, Tomek'
 *
 * The created function is called higher order function.
 */

/*
 * Bonus
 *-----------------
 * The function should verify that the passed parameter is of the string type. If the parameter
 * does not satisfy this condition, the function should raise an exception.
 */

function withPrefix(prefix) {
  if (typeValidation(prefix))
    return function (name) {
      if (typeValidation(name)) return `${prefix}${name}`;
    };
}

function typeValidation(value) {
  if (typeof value !== "string") {
    throw new Error(`${value} is not a string`);
  }
  return true;
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

const course = withPrefix("I ty Opanujesz JavaScript, ");

try {
  verify(course("Marta"), "I ty Opanujesz JavaScript, Marta");
  verify(course("Janek"), "I ty Opanujesz JavaScript, Janek");
} catch {
  console.log("Niestety :(");
}
