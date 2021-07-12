/*
Day-by-Day-Challenge
Exercice 057 - "Cities"

Task
------------
Description:

Write the funtion wich return line by line cities with even number of characters and must be in capital block
*/
const cities = [
  "Wroclaw",
  "Poznan",
  "Krakow",
  "Warszawa",
  "Katowice",
  "Bytom",
  "Jastrzebie-Zdroj",
  "Rabka-Zdroj",
];


const onlyEven = (city) => city.length % 2 === 0;
const upperCases = (city) => city.toUpperCase();
const show = (city) => console.log(city);

const showCitiesWithEvenChars = cities
  .filter(onlyEven)
  .map(upperCases)
  .forEach(show);

