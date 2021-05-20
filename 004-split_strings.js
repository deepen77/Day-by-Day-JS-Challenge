/*
 * Day-by-Day-Challenge
 * Exercice 004 - "split-strings"

* Task
 *------------
 * Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 
 Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
*/






function solution(str) {
  if (str.length == 0) {
    return [];
  }
  return (str.length % 2 ? str + "_" : str).match(/../g);
}

function verify(input, goal) {
  if (JSON.stringify(input) === JSON.stringify(goal)) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(solution("abcdef"), ["ab", "cd", "ef"]);
verify(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
verify(solution(""), []);
