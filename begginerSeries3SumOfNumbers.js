// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

const getSum = (a, b) => {
  //Good luck!
  let small = Math.min(a, b);
  let big = Math.max(a, b);
  let sum = 0;

  while (small <= big) {
    sum += small;

    small++;
  }
  return sum;
};

const a = -1;
const b = 2;

console.log(getSum(a, b));
