// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  let odd = {};

  for (let i = 0; i < A.length; i++) {
    if (odd[A[i]]) {
      odd[A[i]]++;
    } else {
      odd[A[i]] = 1;
    }
  }
  //   return odd;
  for (let key in odd) {
    if (odd[key] % 2 !== 0) {
      return Number(key);
    }
  }
}

input = [7];
input1 = [0];
input2 = [2, 1, 2];
input3 = [0, 1, 0, 1, 0];
input4 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];

console.log(findOdd(input));
console.log(findOdd(input1));
console.log(findOdd(input2));
console.log(findOdd(input3));
console.log(findOdd(input4));
