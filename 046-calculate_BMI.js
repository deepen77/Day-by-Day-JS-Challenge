/*
Day-by-Day-Challenge
Exercice 045 - "Largest pair sum in array"

Task
------------
Description:
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"
*/

//solution 1

function bmi(weight, height) {
  const result = weight / Math.pow(height, 2);

  if (result <= 18.5) {
    return "Underweight";
  } else if (result <= 25) {
    return "Normal";
  } else if (result <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}


//solution 2 
const bmi2 = (w, h, bmi = w / h / h) =>
  bmi <= 18.5
    ? "Underweight"
    : bmi <= 25
    ? "Normal"
    : bmi <= 30
    ? "Overweight"
    : "Obese";

//solution 3 

function bmi3(weight, height) {
  const formula = weight / Math.pow(height, 2);
  switch (true) {
    case formula <= 18.5:
      return "Underweight";
    case formula <= 25.0:
      return "Normal";
    case formula <= 30:
      return "Overweight";
    default:
      return "Obese";
  }
}


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(bmi(50, 1.8), "Underweight");
verify(bmi(80, 1.8), "Normal");
verify(bmi(90, 1.8), "Overweight");
verify(bmi(110, 1.8), "Obese");

verify(bmi2(50, 1.8), "Underweight");
verify(bmi2(80, 1.8), "Normal");
verify(bmi2(90, 1.8), "Overweight");
verify(bmi2(110, 1.8), "Obese");

verify(bmi3(50, 1.8), "Underweight");
verify(bmi3(80, 1.8), "Normal");
verify(bmi3(90, 1.8), "Overweight");
verify(bmi3(110, 1.8), "Obese");