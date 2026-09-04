// EASY LEVEL

// Question 1
// Create an array of 5 animal names.
// Print the array.
let fiveanimals = ["Monkey", "Elephant", "Giraffe", "Dog", "Cat"];
console.log(fiveanimals);

// Question 2
// Create an array of 5 numbers.
// Print the first and last number.
let fivenumbers = [1, 2, 3, 4, 5];
console.log(fivenumbers); // ❌

// Question 3
// Print every item inside this array.

let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[0] + fruits[1] + fruits[2]);

// Question 4
// Change "Dog" into "Cat".

let animals = ["Dog", "Bird", "Fish"];
animals[0] = "Cat";
console.log(animals);

// Question 5
// Add a new color into the array.S

let colors = ["Red", "Blue"];
colors.push("Black");

console.log(colors);

// Question 6
// Remove the last item from the array.

let foods = ["Rice", "Chicken", "Soup"];
foods.pop(foods.length - 1); // ❌
console.log(foods);

// MEDIUM LEVEL

// Question 7
// Use a loop to print all students.

let students = ["Ali", "John", "Sarah"];
for (let index = 1; index < 4; index++) {
  console.log(students[index - 1]);
}

// Question 8 ⚠️
// Use a loop to calculate total marks.

let marks = [80, 70, 90];
for (let index = 1; index < 4; index++) {
  console.log(marks[index - 1]);
}

// Question 9 🔍
// Count how many numbers are greater than 50.

let numbers = [20, 80, 40, 90];
let total = [];
for (let index = 1; index < 5; index++) {
  if (numbers[index - 1] > 50) {
    total[index - 1] = 1;
  } else {
    total[index - 1] = 0;
  }
}

console.log(total[0] + total[1] + total[2] + total[3]);

// Question 10
// Add a new subject and print all subjects.

let subjects = ["Math", "English"];
subjects.push("Physic");

console.log(subjects);

// Question 11
// Remove the last product from the list.

let products = ["Laptop", "Phone", "Tablet"];
products.pop(products.length);

console.log(products);

// Question 12
// Print only even numbers.

let nNumbers = [1, 2, 3, 4, 5, 6];
for (index = 1; index < nNumbers.length + 1; index++) {
  if (nNumbers[index - 1] % 2 == 0) {
    console.log(nNumbers[index - 1]);
  }
}

// HARD LEVEL

// Question 13
// Find the total price.

let prices = [100, 200, 300];
console.log(prices[0] + prices[1] + prices[2]);

// Question 14 ❌
// Find the average score.

let scores = [80, 90, 70, 100];
console.log((score[0] + score[1] + score[2] + scoer[3]) / 2);

// Question 15 ❌
// Count how many students passed.
// Passing mark is 60.

let sScores = [50, 80, 40, 90, 70];
for (index = 1; index < sScores.length + 1; index++) {
  if (sScores[index - 1] >= 60) {
    console.log("Pass");
  }
}

// Question 16 ⚠️
// Find the smallest number.

let nnNumbers = [50, 20, 80, 10, 40];
for (index = 1; index <= nnNumbers.length; index++) {
  if (nnNumbers[index - 1] < nnNumbers[index]) {
    console.log(nnNumbers[index - 1]);
  }
} //not done

// Question 17
// Create a shopping cart.
// Add 3 items.
// Remove 1 item.
// Print the final cart.
let shoppingCart = [];
shoppingCart.push("Tape", "Lighter", "Bottle");
shoppingCart.pop();
console.log(shoppingCart);

// Question 18 (skip first for now)
// Ask the user for 5 numbers.
// Store them inside an array.
// Print all numbers.
wat;

// Question 19
// Find how many times "Apple" appears.
let times = 0;
let fFruits = ["Apple", "Banana", "Apple", "Orange", "Apple"];
for (index = 0; index < fFruits.length; index++) {
  if (fFruits[index] == "Apple") {
    times = times + 1;
  }
}

console.log("times:", times);
// Question 20
// Create a student score system.
// Store 5 scores.
// Print:
// - all scores
// - total score
// - average score
// - number of students who passed

let score = [50, 80, 75, 29];
let tTotal = 0;
for (let all of score) {
  tTotal += all;
}
console.log("Total Score : " + tTotal);
console.log("Average Score : " + tTotal / score.length);

let numPass = 0;
for (let value of score) {
  if (value > 40) {
    numPass = numPass + 1;
  }
}
console.log("Total Passes : " + numPass);
