// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// const filterList = (list) => {
//   let res = [];

//   for (let i = 0; i < list.length; i++) {
//     if (typeof list[i] === "number") {
//       res.push(list[i]);
//     }
//   }
//   return res;
// };

const filterList = (list) => {
  let res = list.filter((e) => typeof e === "number");

  return res;
};

const list = [1, 2, "a", "b"];
const list1 = [1, "a", "b", 0, 15];
const list2 = [1, 2, "aasf", "1", "123", 123];

console.log(filterList(list));
console.log(filterList(list1));
console.log(filterList(list2));
