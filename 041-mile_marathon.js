/*
Day-by-Day-Challenge
Exercice 041 - "Mile Marathon"

Task
------------

//Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

//Return true if the marathon is 25 miles long, otherwise, return false.



*/

function marathonDistance(d) {
  if(d===25) {
  return true
  }else {
    return false
  }
}

function verify(input, goal) {
  input = Array.isArray(input) ? `[${input.join(", ")}]` : input;
  if (input == goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}


verify(marathonDistance(10), false)
verify(marathonDistance(25), true)
verify(marathonDistance(26), false)