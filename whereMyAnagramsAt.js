// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  let a = word.split("").sort().join("");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let b = words[i].split("").sort().join("");
    if (a === b) result.push(words[i]);
  }
  return result;
}

const word = "abba";
const words = ["aabb", "abcd", "bbaa", "dada"];

const word1 = "racer";
const words1 = ["crazer", "carer", "racar", "caers", "racer"];

const word2 = "laser";
const words2 = ["lazing", "lazy", "lacer"];

console.log(anagrams(word, words));
// console.log(anagrams(word1, words1));
// console.log(anagrams(word2, words2));
