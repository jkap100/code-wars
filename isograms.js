// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = (str) => {
  //...
  let word = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (word.indexOf(word[i]) !== word.lastIndexOf(word[i])) {
      return false;
    }
  }
  return true;
};

const str = "Dermatoglyphics";
const str1 = "aba";
const str2 = "moOse";

console.log(isIsogram(str));
console.log(isIsogram(str1));
console.log(isIsogram(str2));
