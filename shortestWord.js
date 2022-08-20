// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// const findShort = (str) => {
//   let shortest = str.split(" ")[0].length;
//   let arr = str.split(" ");

//   for (let i = 1; i < arr.length; i++) {
//     console.log(arr[i]);
//     console.log(arr[i].length);
//     if (arr[i].length <= shortest) {
//       shortest = arr[i].length;
//     }
//   }

//   return shortest;
// };

// const findShort = (str) => {
//   let words = str.split(" ");

//   return words.filter((word) => word.length <= 3)[0].length;
// };

const findShort = (s) =>
  s
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;

const s = "bitcoin take over the world maybe who knows perhaps";
const s2 = "Let's travel abroad shall we";

console.log(findShort(s));
console.log(findShort(s2));
