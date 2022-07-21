// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
  //TODO Have fun :)
  strArr = string.split(" ");
  solution = "";

  //   console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5) {
      solution += strArr[i].split("").reverse().join("");
      solution += " ";
    } else {
      solution += strArr[i];
      solution += " ";
    }
  }
  return solution.substring(0, solution.length - 1);
}

const input = "Hey fellow warriors";
const input1 = "This is a test";
const input2 = "This is another test";

console.log(spinWords(input));
// console.log(spinWords(input1));
// console.log(spinWords(input2));
