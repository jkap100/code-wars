// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

// Output
// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

// Example
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data) {
  // ...
  let output = [];

  for (let i = 0; i < data.length; i++) {
    // console.log([data[i][0], data[i][1]]);
    if (data[i][0] <= data[i][1]) {
      hc = data[i][0];
      age = data[i][1];

      console.log(`hc ${hc}`);
      console.log(`age ${age}`);

      if (age >= 55 && hc > 7) {
        output.push("Senior");
      } else {
        output.push("Open");
      }
    } else {
      hc = data[i][1];
      age = data[i][0];

      console.log(`hc ${hc}`);
      console.log(`age ${age}`);

      if (age >= 55 && hc > 7) {
        output.push("Senior");
      } else {
        output.push("Open");
      }
    }
  }
  return output;
}

const data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

const data1 = [
  [11, 25],
  [13, 17],
  [15, 19],
  [68, 7],
];

// console.log(openOrSenior(data));
console.log(openOrSenior(data1));
