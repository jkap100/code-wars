// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// const XO = (str) => {
//   //code here
//   let lcase = str.toLowerCase();
//   let x = "";
//   let o = "";

//   for (let i = 0; i < lcase.length; i++) {
//     if (lcase[i] === "x") {
//       x += lcase[i];
//     } else if (lcase[i] === "o") {
//       o += lcase[i];
//     }
//   }

//   return x.length === o.length;
// };

const XO = (str) => {
  //code here
  let lcase = str.toLowerCase().split("");
  return lcase.filter((x) => x === "x") === lcase.filter((o) => o === "o");
};

const str = "ooxx";
const str1 = "xooxx";
const str2 = "ooxXm";
const str3 = "zpzpzpp";
const str4 = "zzoo";

console.log(XO(str));
console.log(XO(str1));
console.log(XO(str2));
console.log(XO(str3));
console.log(XO(str4));
