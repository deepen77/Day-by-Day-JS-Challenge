/*
Day-by-Day-Challenge
Exercice 075 - "Optimal Taxi Fare"

Task
------------
Description:
The student needs to get on a train that leaves from the station D kilometres away in T minutes.
She can get a taxi that drives at V1 km/h for the price of R €/km or she can walk at V2 km/h for free.
A correct solution will be a function that returns the minimum price she needs to pay the taxi driver or the string "Won't make it!".
All the inputs will be positive integers, the output has to be a string containing a number with two decimal places - or "Won't make it!" if that is the case.
It won't take her any time to get on the taxi or the train.
In non-trivial cases you need to combine walking and riding the taxi so that she makes it, but pays as little as possible.
*/
function calculateOptimalFare(d, t, v1, r, v2) {
  var h = t / 60, walk = v2 * h;
  if (walk >= d) { return "0.00";            }
  if (v1*h <  d) { return 'Won\'t make it!'; }
  return (r * v1 * (d - walk) / (v1 - v2)).toFixed(2);
};





console.log(calculateOptimalFare(8, 10, 90, 2, 6))
console.log(calculateOptimalFare(100, 10, 500, 5, 25));