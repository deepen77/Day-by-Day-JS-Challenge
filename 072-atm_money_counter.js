/*
Day-by-Day-Challenge
Exercice 072 - "ATM Money Counter"

Task
------------
Description:
Imagine that we have ATM with multiple currencies. The users can withdraw money of in any currency that the ATM has.
Our function must analyze the currency and value of what the users wants, and give money to the user starting from bigger values to smaller. The ATM gives the least amount of notes possible.
This kata has a preloaded dictionary of possible bank note values for different currencies (RUB, EUR, UAH, USD, CUP, SOS):
VALUES = { "EUR": [5, 10, 20, 50, 100, 200, 500], "USD": ... }
The function should return a string containing how many bank notes of each value the ATM will give out, for example:
"8 * 100 USD, 2 * 20 USD, 1 * 2 USD"
If it can't do that because there are no notes for this value, it should return:
"Can't do *value* *currency*. Value must be divisible by *amount*!"
(replace *value*, *currency* and *amount* with the relevant details)
If it doesn't have the requested currency at all, it should return:
"Sorry, have no *currency*."
Notes:
Letter case and word order doesn't matter in the input: e.g. "EUR 1000" and "1000eur" are the same. See test cases for more user input samples.
Do not create your own VALUES dictionary/hash or you'll get broken tests.
*/
const VALUES = { "EUR": [5, 10, 20, 50, 100, 200, 500] }


function atm(value) {
  let l = value.replace(/\d+/, "").toUpperCase().trim().replace(/ /g, "");
  let val = VALUES[l];
  let n = value.replace(/[^\d]+/, "").trim() * 1;
  if (val) {
    if (n % val[0] !== 0 || val[0] > n)
      return `Can\'t do ${n} ${l}. Value must be divisible by ${val[0]}!`;
    let arr = Array.from({ length: val.length }, (v, i) => [0, 0]);
    for (let i = val.length; i >= 0; i--) {
      while (n >= val[i]) {
        n -= val[i];
        arr[i][0] += 1;
        arr[i][1] = val[i];
      }
    }
    return arr
      .reverse()
      .filter((v) => v[0] !== 0)
      .map((v) => v.join` * ` + " " + l).join`, `;
  }
  return `Sorry, have no ${l}.`;
}


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}







verify(atm("XSF 1000"), "Sorry, have no XSF.");
verify(
  atm("rub 12341"),
  "Can't do 12341 RUB. Value must be divisible by 10!"
);
verify(atm("10202UAH"), "20 * 500 UAH, 2 * 100 UAH, 1 * 2 UAH");
verify(atm("842 usd"), "8 * 100 USD, 2 * 20 USD, 1 * 2 USD");
verify(atm("euR1000"), "2 * 500 EUR");
verify(
  atm("sos100"),
  "Can't do 100 SOS. Value must be divisible by 1000!"
);