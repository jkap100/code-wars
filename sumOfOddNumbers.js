function rowSumOddNumbers(n) {
  // TODO
  let first = n * n - (n - 1);

  let result = 0;
  let count = 0;

  while (count < n) {
    if (first % 2 !== 0) {
      result += first;
      count++;
    }
    first++;
  }
  return result;
}
