//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message) {
  //your code here
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  let output = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split("");
  let messageArr = message.split("");
  let solution = "";

  for (let i = 0; i < message.length; i++) {
    if (/^[a-zA-Z]+$/.test(messageArr[i])) {
      solution += output[input.indexOf(message[i])];
    } else {
      solution += message[i];
    }
  }
  return solution;
}

const input = "Jon"; //Wba
const input2 = "12";
const input3 = "Jon is 13";

console.log(rot13(input));
console.log(rot13(input2));
console.log(rot13(input3));
