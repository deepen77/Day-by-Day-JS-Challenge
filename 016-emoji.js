/*
Day-by-Day-Challenge
Exercice 016 - "emoji"

Task
------------
 Implement the function "useEmoji" which will replace all the words of the given parameter according to with mapping from the object "emojiMappings
 
 Example:
 useEmoji("I have said stop, definitelly stop!") // => "I have said 🚫, definitelly 🚫!"
 useEmoji("I'm going for new car :D") // => "I'm going for new 🏎 :D"
 */

const emojiMappings = {
  stop: "🚫",
  star: "⭐️",
  car: "🏎",
  build: "🧱",
  timer: "⏰",
};
//***FIRST METHOD**/
// function useEmoji(input) {
//     let sentence = input;
//     for (let [key, value] of Object.entries(emojiMappings)) {
//       while (sentence.includes(key)) {
//         sentence = sentence.replace(key, value);
//       }
//     }
//     return sentence;
//   }
//***SECOND METHOD**/
// function useEmoji(input) {
//     let sentence = input;
//     for (const [word, emoji] of Object.entries(emojiMappings)) {
//       sentence = sentence.replaceAll(word, emoji);
//     }
//     return sentence;
//   }

//THIRD METHOD

function useEmoji(input) {
  let sentence = input;
  for (const [word, emoji] of Object.entries(emojiMappings)) {
    const replacement = new RegExp(word, "gi");
    sentence = sentence.replace(replacement, emoji);
  }
  return sentence;
}

/* Verification */

function verify(input, goal) {
  if (input === goal) {
    console.log("Congratulation!");
  } else {
    console.log(`Sorry, expected - ${goal}, received - ${input}`);
  }
}

verify(
  useEmoji("I have said stop, definitelly stop!"),
  "I have said 🚫, definitelly 🚫!"
);
verify(useEmoji("I'm going for new car :D"), "I'm going for new 🏎 :D");
verify(
  useEmoji("I'm just build new skills in JS"),
  "I'm just 🧱 new skills in JS"
);
