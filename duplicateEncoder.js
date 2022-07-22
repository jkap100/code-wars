function duplicateEncode(word) {
  let letters = word.toLowerCase().split("");
  let characters = {};

  for (let i = 0; i < letters.length; i++) {
    let x = letters[i];
    if (characters[x]) {
      characters[x]++;
    } else {
      characters[x] = 1;
    }
  }
  console.log(characters);

  return letters
    .map((letter) => {
      return characters[letter] === 1 ? "(" : ")";
    })
    .join("");
}

const input = "din";
const input1 = "recede";

console.log(duplicateEncode(input));
console.log(duplicateEncode(input1));
