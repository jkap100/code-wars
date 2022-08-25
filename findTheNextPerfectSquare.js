// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  const sqrt = Math.sqrt(sq);

  if (sq !== Math.floor(sqrt) * Math.floor(sqrt)) {
    return -1;
  } else {
    return (sqrt + 1) * (sqrt + 1);
  }
}

const sq = 121;
const sq1 = 625;
const sq2 = 114;

console.log(findNextSquare(sq));
console.log(findNextSquare(sq1));
console.log(findNextSquare(sq2));
