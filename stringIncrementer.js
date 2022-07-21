// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng) {
  const index = strng.search(/[0-9]/);

  if (index === -1 || strng.length === 0) {
    return strng + 1;
  }

  let zeros = "";

  let leadingStr = strng.substring(0, index);
  let numStr = strng.substring(index);

  let increment = Number(numStr) + 1;

  for (let i = 0; i < numStr.length; i++) {
    if (Number(numStr[i]) === 0) {
      zeros += Number(numStr[i]);
    }
  }

  if (
    Number(numStr.substring(numStr.length - 1) === "9") ||
    numStr.search(/[1-9]/) === -1
  ) {
    zeros = zeros.substring(1);
  }

  return leadingStr + zeros + increment;
}

const input = "foo";
const input1 = "foo0042";
const input2 = "foo9";
const input3 = "foo099";
const input4 = "000";
const input5 = "foobar099";
const input6 = "";

console.log(incrementString(input));
console.log(incrementString(input1));
console.log(incrementString(input2));
console.log(incrementString(input3));
console.log(incrementString(input4));
console.log(incrementString(input5));
console.log(incrementString(input6));
