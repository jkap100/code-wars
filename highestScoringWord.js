// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  let arr = x.split(" ");
  let scores = [];

  for (let i = 0; i < arr.length; i++) {
    let letters = arr[i].split("");
    let wordScore = 0;
    // console.log(letters);
    letters.forEach((e) => {
      //   console.log(e.charCodeAt(0) - 96);
      wordScore += e.charCodeAt(0) - 96;
    });
    scores.push(wordScore);
  }

  const max = Math.max(...scores);
  //   console.log(max);
  const index = scores.indexOf(max);
  //   console.log(index);

  return arr[index];
}

const input = "man i need a taxi up to ubud";

console.log(high(input));
