// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  const total = Number(a) + Number(b); // Fix me!
  return eToNumber(total);
}

function eToNumber(num) {
  let sign = "";
  (num += "").charAt(0) == "-" && ((num = num.substring(1)), (sign = "-"));
  let arr = num.split(/[e]/gi);
  if (arr.length < 2) return sign + num;
  let dot = (0.1).toLocaleString().substr(1, 1),
    n = arr[0],
    exp = +arr[1],
    w = (n = n.replace(/^0+/, "")).replace(dot, ""),
    pos = n.split(dot)[1] ? n.indexOf(dot) + exp : w.length + exp,
    L = pos - w.length,
    s = "" + BigInt(w);
  w =
    exp >= 0
      ? L >= 0
        ? s + "0".repeat(L)
        : r()
      : pos <= 0
      ? "0" + dot + "0".repeat(Math.abs(pos)) + s
      : r();
  L = w.split(dot);
  if ((L[0] == 0 && L[1] == 0) || (+w == 0 && +s == 0)) w = 0; //** added 9/10/2021
  return sign + w;
  function r() {
    return w.replace(new RegExp(`^(.{${pos}})(.)`), `$1${dot}$2`);
  }
}

console.log(add("123", "321"));
console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
