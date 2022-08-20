// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

const alphabetPosition = (text) => {
  const lcase = text.toLowerCase().split(" ");
  let res = "";

  console.log(lcase);
  console.log("a".charCodeAt());
  console.log("z".charCodeAt());

  for (let i = 0; i < lcase.length; i++) {
    let letters = lcase[i].split("");
    for (let j = 0; j < letters.length; j++) {
      if (letters[j].charCodeAt() >= 97 && letters[j].charCodeAt() <= 122) {
        res += (letters[j].charCodeAt() - 96).toString();
        res += " ";
      }
    }
  }

  return res.slice(0, -1);
};

const text = "The sunset sets at twelve o' clock.";

console.log(alphabetPosition(text));

("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11 ");
("20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
