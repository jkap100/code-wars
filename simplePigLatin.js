// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  str = str.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z]/.test(str[i])) {
      str[i] = str[i].slice(1) + str[i][0] + "ay";
    }
  }
  return str.join(" ");
}

const input = "Pig latin is cool";
const input1 = "Hello world !";

console.log(pigIt(input));
console.log(pigIt(input1));

// || /\s/.test(arr[i])
