function digital_root(n) {
  // ...
  let total = 0;

  String(n)
    .split("")
    .map((num) => {
      total += Number(num);
    });
  return total >= 10 ? digital_root(total) : total;
}

const input = 16;
const input2 = 942;
const input3 = 132189;
const input4 = 493193;

console.log(digital_root(input));
console.log(digital_root(input2));
console.log(digital_root(input3));
console.log(digital_root(input4));
