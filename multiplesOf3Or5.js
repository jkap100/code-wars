//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   const numArr = number.toString().split("");
//   const nums = [number - 1];
//   let i = number;
//   let divisible = [];
//   let total = 0;

//   while (i > 1) {
//     nums.unshift(i - 1);
//     i--;
//   }

//   if (number <= 0) {
//     return 0;
//   } else {
//     for (let j = 0; i < nums.length - 1; i++) {
//       if (nums[i] % 3 === 0 || nums[i] % 5 === 0) {
//         // divisible.push(nums[i]);
//         total += nums[i];
//       }
//     }
//   }

//   //   for (let x = 0; x < divisible.length - 1; x++) {
//   //     console.log(divisible[x]);
//   //     total += divisible[x];
//   //   }

//   return total;
// }

function solution(number) {
  let nums = number - 1;

  let total = 0;

  if (number <= 0) {
    return 0;
  } else {
    while (nums > 1) {
      if (nums % 3 === 0 || nums % 5 === 0) {
        total += nums;
      }
      nums--;
    }
  }

  return total;
}

const input = 10;
const input1 = -3;

console.log(solution(input));
console.log(solution(input1));
