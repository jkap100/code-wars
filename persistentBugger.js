//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num, counter = 0) {
  let arr = Array.from(num.toString()).map(Number);

  if (arr.length === 1) {
    return counter;
  } else {
    let multiplied = arr.reduce((a, b) => a * b);
    return persistence(multiplied, counter + 1);
  }
}

const input = 39; //expect 3
const input2 = 999; /// 4
const input3 = 4; //expect 0

console.log(persistence(input));
console.log(persistence(input2));
console.log(persistence(input3));
