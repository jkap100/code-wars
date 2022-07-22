function perimeter(n) {
  let num = n + 1;
  let sum = 1;
  let x = [0, 1];

  for (let i = 2; i <= num; i++) {
    let fib = x[i - 1] + x[i - 2];
    x.push(fib);
    sum += fib;
  }

  return sum * 4;
}

const input = 5;
console.log(perimeter(input));
