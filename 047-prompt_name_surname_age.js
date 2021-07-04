/*
Day-by-Day-Challenge
Exercice 047 - "Prompt Name Surname Age"

Task
------------
Description:
create a program that will take the user's first name, last name, and finally age.
If the age is 18 or older, display the name on the console
*/


const name = prompt("Enter your name");
const surName = prompt("Enter your surname");
const age = prompt("Enter your age")




if (name !== '' && surName !=='' && age >=18) {
    console.log(`${name} ${surName}`)
} else {
    console.log('Sorry, no access, you have less than 18 years old')
}