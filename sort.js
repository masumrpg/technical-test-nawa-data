const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Sort characters according to the order they came out and separate vowels and consonants.
 * @param {string} input - The input string containing words.
 */
function sortCharacters(input) {
  const vowels = "aeiou";
  let vowelChars = {};
  let consonantChars = {};

  for (let char of input.toLowerCase()) {
    if (char === " ") continue;
    if (vowels.includes(char)) {
      vowelChars[char] = (vowelChars[char] || 0) + 1;
    } else if (/[a-z]/.test(char)) {
      consonantChars[char] = (consonantChars[char] || 0) + 1;
    }
  }

  let sortedVowels = "";
  for (let char in vowelChars) {
    sortedVowels += char.repeat(vowelChars[char]);
  }

  let sortedConsonants = "";
  for (let char in consonantChars) {
    sortedConsonants += char.repeat(consonantChars[char]);
  }

  console.log("Vowel Characters :");
  console.log(sortedVowels);
  console.log("Consonant Characters :");
  console.log(sortedConsonants);
}

rl.question("Input one line of words (S) : ", (input) => {
  sortCharacters(input);
  rl.close();
});
