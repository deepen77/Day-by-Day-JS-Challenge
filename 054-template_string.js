/*
Day-by-Day-Challenge
Exercice 054 - "Template string"

Task
------------
Description:

Create a template string based on the info variable
*/


const name = "Smbd Test";
const age = 35;
const role = "Admin";

const info =
  name +
  " has a role of " +
  role +
  " and is born in year " +
  (new Date().getFullYear() - age);

const infoTemplateString = `${name} has a role of ${role} and is born in year ${
  new Date().getFullYear() - age
}`;

console.log(info);
console.log(infoTemplateString);