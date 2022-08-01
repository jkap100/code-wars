// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  // build here
  tower = [];
  let str = "*";
  let space = " ";

  for (let i = 1; i <= nFloors; i++) {
    let starCount = i * 2 - 1;
    let spaceCount = nFloors - i;
    // console.log(spaceCount);
    tower.push(
      `${space.repeat(spaceCount)}${str.repeat(starCount)}${space.repeat(
        spaceCount
      )}`
    );
    // tower.push(`${str.repeat(starCount)}`);
    // tower.push(`${space.repeat(spaceCount)}`);
  }
  //   console.log(tower.slice(1));
  return tower;
}

const input = 3;

console.log(towerBuilder(input));

// console.log("Hello \n World");
// const p = document.getElementById("paragraph");
// console.log(p.insertAdjacentText("jon, bliz"));
