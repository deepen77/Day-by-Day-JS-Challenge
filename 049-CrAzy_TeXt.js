/*
Day-by-Day-Challenge
Exercice 049 - "CrAzY TeXt"

Task
------------
Description:

Write a program that accepts the text entered by the user through the prompt
Then write each single character in the loop, but like this. that the odd ones be written in a capital letter, and then a small one

hello --> HeLlO
*/

const name = prompt("Enter name")

for (let i=0; i<name.length; i++) {
    if (i%2 === 0) {
        console.log(name[i].toUpperCase())
    } else {
        console.log(name[i].toLowerCase())
    }
}