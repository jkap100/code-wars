// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// function longest(s1, s2) {
//   // your code
//   let str = s1 + s2;
//   let sorted = sortAlphabet(str);
//   let res = "";

//   for (let i = 0; i < sorted.length; i++) {
//     // console.log(sorted[i] !== sorted[i + 1]);
//     if (sorted[i] !== sorted[i + 1]) {
//       res += sorted[i];
//     }
//   }

//   //   console.log(sorted);
//   return res;
// }

// function sortAlphabet(str) {
//   return [...str].sort().join("");
// }

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

const a = "xyaabbbccccdefww";
const b = "xxxxyyyyabklmopq";

console.log(longest(a, b));
