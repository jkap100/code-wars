// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

const alphabetPosition = (text) => {
  const lCase = text.toLowerCase();
  let res = "";

  console.log("a".charCodeAt());
  console.log("z".charCodeAt());

  for (let i = 0; i < lCase.length; i++) {
    let num = lCase.charCodeAt(i);

    if (num >= 97 && num <= 122) {
      res += lCase[i].charCodeAt() - 96;
      res += " ";
    }
  }

  return res.slice(0, -1);
};

const text = "The sunset sets at twelve o' clock.";

console.log(alphabetPosition(text));
