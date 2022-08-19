// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  numStr = num.toString();
  let res = "";
  //   console.log(numStr);

  for (let i = 0; i < numStr.length; i++) {
    exp = Math.pow(Number(numStr[i]), 2);
    res += exp;
    // console.log(res);
  }
  return Number(res);
}

const num = 3212;

console.log(squareDigits(num));
