//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  let arr = text.split("");
  let noDuplicate = [];
  let duplicate = [];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (noDuplicate.includes(arr[i].toLowerCase())) {
      duplicate.push(arr[i].toLowerCase());
    } else {
      noDuplicate.push(arr[i].toLowerCase());
    }
  }

  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const uniqueNums = duplicate.filter(unique);

  return uniqueNums.length;
}

const input = "abcde";
const input1 = "aabbcde";
const input2 = "aA11";
const input3 = "Indivisibility";

console.log(duplicateCount(input));
console.log(duplicateCount(input1));
console.log(duplicateCount(input2));
console.log(duplicateCount(input3));
