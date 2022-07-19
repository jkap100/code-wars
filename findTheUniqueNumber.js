function findUniq(arr) {
  // do magic
  let sorted = arr.sort((a, b) => a - b);

  return sorted[0] - sorted[1] === 0 ? sorted[sorted.length - 1] : sorted[0];
}

const input = [1, 1, 1, 2, 1, 1];
const input2 = [0, 0, 0.55, 0, 0];

console.log(findUniq(input));
console.log(findUniq(input2));
// console.log(findUniq(input3));
