/*
Day-by-Day-Challenge
Exercice 069 - "Multiple number options"

Task
------------

Description:

You will be dealing with two digits selected from numbers 1-9. Your task is to create a function that takes all the possible variations of the numbers 1 through to nine, EXCLUDING the numbers in the test case, for example: "22" will return all the possible variations of ["1","3","4","5","6","7","8","9"]
"23" will return all the possible variations of ["1","3","4","5","6","7","8","9"] and ["1","2","4","5","6","7","8","9"]
and it should be in ascending order for example the start of "23" would be:
[ '11', '12', '14', '15', '16', '17', '18', '19', '31', '32', '34',
.....etc Matching all the numbers in "2" with all the numbers in "3".
Note, for the above example "23" the result will contain both "2" and "3" as the variations for the number "2" include a "3" and the variations for the number "3" include a "2". The only time where your result will not contain the numbers in the test case, is if the test case is the same digit twice e.g. "22", "33", "44"...etc! for example the start of the "11" combination is [ '22', '23', '24', '25', '26', '27', '28', '29', '32', '33', '34', '35', '36', '37', '38', '39', '42',
.....etc
Good Luck!
*/
const numMix = (x) => {
  const res = [];
  for (let i = 1; i < 10; i++)
    for (let j = 1; j < 10; j++)
      if (i != x[0] && j != x[1]) res.push(`${i}${j}`);
  return res;
};


function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(numMix("89"), [
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
]);
verify(numMix("11"), [
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
]);
verify(numMix("56"), [
  "11",
  "12",
  "13",
  "14",
  "15",
  "17",
  "18",
  "19",
  "21",
  "22",
  "23",
  "24",
  "25",
  "27",
  "28",
  "29",
  "31",
  "32",
  "33",
  "34",
  "35",
  "37",
  "38",
  "39",
  "41",
  "42",
  "43",
  "44",
  "45",
  "47",
  "48",
  "49",
  "61",
  "62",
  "63",
  "64",
  "65",
  "67",
  "68",
  "69",
  "71",
  "72",
  "73",
  "74",
  "75",
  "77",
  "78",
  "79",
  "81",
  "82",
  "83",
  "84",
  "85",
  "87",
  "88",
  "89",
  "91",
  "92",
  "93",
  "94",
  "95",
  "97",
  "98",
  "99",
]);
