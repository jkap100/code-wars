// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// function getMiddle(s)

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
  let solution = "";

  if (s.length === 1) {
    return s.substring(0);
  }

  if (s.length % 2 === 0) {
    return (solution += s.substring(s.length / 2 - 1, s.length / 2 + 1));
  }
  return (solution += s.substring(s.length / 2 - 0.5, s.length / 2 + 0.5));
}

input = "test";
input1 = "testing";
input2 = "middle";
input3 = "a";

console.log(getMiddle(input));
console.log(getMiddle(input1));
console.log(getMiddle(input2));
console.log(getMiddle(input3));
