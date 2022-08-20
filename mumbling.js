// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   let newStr = [];

//   for (let i = 0; i < s.length; i++) {
//     newStr.push(casing(s[i], i + 1));
//   }
//   return newStr.join("-");
// }

// function casing(s, n) {
//   //format string
//   let letter = s.toUpperCase();

//   while (letter.length !== n) {
//     letter += s.toLowerCase();
//     console.log(n);
//     console.log(letter);
//   }

//   return letter;
// }

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

const input = "abcd";
const input1 = "RqaEzty";
const input2 = "cwAt";

console.log(accum(input));
// console.log(accum(input1));
// console.log(accum(input2));
