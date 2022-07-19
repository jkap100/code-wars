// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str) {
  let strArr = [];

  // console.log(str.indexOf("-"));

  strArr = str.split("-");

  if (strArr.length == 1) {
    strArr = str.split("_");
  }

  let ccStr = strArr[0];

  for (let i = 1; i < strArr.length; i++) {
    ccStr += capitalize(strArr[i]);
  }

  return ccStr;
}

let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

const input = "the-stealth-warrior"; //expected "theStealthWarrior"
const input2 = "The_Stealth_Warrior"; //expected "theStealthWarrior"

console.log(toCamelCase(input));
console.log(toCamelCase(input2));

// console.log(input2.split("_"));
