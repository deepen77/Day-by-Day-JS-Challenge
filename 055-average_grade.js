/*
Day-by-Day-Challenge
Exercice 055 - "Average Grade"

Task
------------
Description:

Take aveage grade from all grades in array
*/

const grades = [1,2,3,4,4,3,4,6,5,5,5];
let sumAverage = 0;

grades.forEach((grade) => {
    (sumAverage += grade/grades.length)
})


console.log(sumAverage)



