// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  let numStr = numbers.split(" ");

  //   console.log(numStr);
  let numArr = [];
  let res = "";

  for (let i = 0; i < numStr.length; i++) {
    numArr.push(Number(numStr[i]));
  }
  //   console.log(numArr);
  let sort = numArr.sort((a, b) => a - b);
  console.log(sort);

  res += sort[sort.length - 1];
  res += " ";
  res += sort[0];

  return res;
}

const input = "1 2 3 4 5";
const input1 = "1 2 -3 4 5";
const input2 = "1 9 3 4 -5";

console.log(highAndLow(input));
console.log(highAndLow(input1));
console.log(highAndLow(input2));
