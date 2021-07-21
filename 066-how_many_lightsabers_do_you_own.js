/*
Day-by-Day-Challenge
Exercice 066 - "How many lightsabers do you own?"

Task
------------
Description:

Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18
*/



function howManyLightsabersDoYouOwn(name) {
  if(name === "Zach") {
    return 18
  } else {
   return 0 
  }
}

// function howManyLightsabersDoYouOwn(name) {
//   return name === "Zach" ? 18 : 0;
// }


function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(howManyLightsabersDoYouOwn(), 0);
verify(howManyLightsabersDoYouOwn("Adam"), 0);
verify(howManyLightsabersDoYouOwn("Zach"), 18);