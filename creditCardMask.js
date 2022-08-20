// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

const maskify = (cc) => {
  if (cc.length <= 4) return cc;

  let last4 = cc
    .split("")
    .slice(cc.length - 4)
    .join("");

  let start = cc
    .split("")
    .slice(0, cc.length - 4)
    .join("");

  let mask = "";

  console.log(last4);
  console.log(start);
  console.log(cc);

  for (let i = 0; i < start.length; i++) {
    mask += "#";
  }

  return mask + last4;
};

const cc = "4556364607935616";

console.log(maskify(cc));

// 4556364607935616
// 4556364607935616
