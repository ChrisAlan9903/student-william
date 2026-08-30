// let times = 0;
// let fFruits = ["Apple", "Banana", "Apple", "Orange", "Apple"];
// for (index = 0; index < fFruits.length; index++) {
//   if (fFruits[index] == "Apple") {
//     // times = times + 1;
//     times++;
//   }
// }

// console.log("times:", times);

// Question 8 ⚠️
// Use a loop to calculate total marks.

let sum = 0;
let marks = [80, 70, 90];
for (let index = 0; index < marks.length; index++) {
  sum = sum + marks[index];
}
console.log("sum:", sum);

// alternative method to loop
for (let item of marks) {
  sum = sum + item;
}
