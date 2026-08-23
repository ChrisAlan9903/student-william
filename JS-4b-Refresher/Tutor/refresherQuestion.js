/*
========================================
JAVASCRIPT REFRESHER - 15 QUESTIONS
Topics:
- Variables
- Data Types
- If / Else
- Arrays
========================================
*/

// ========================================
// Question 1 - Variables
// ========================================
// Create a variable called studentName.
// Store your name inside it.
// Then print the variable using console.log().
let studentName = "william";
console.log(studentName);

// ========================================
// Question 2 - Number
// ========================================
// Create two variables:
// - price = 15
// - quantity = 3
//
// Create another variable called totalPrice
// that stores price * quantity.
//
// Print totalPrice.
let price = 15;
let quantity = 3;
let totalPrice = price * quantity;
console.log(totalPrice);

// ========================================
// Question 3 - String
// ========================================
// Create these variables:
//
// firstName = "Ali"
// lastName = "Tan"
//
// Print:
//
// Ali Tan
//
// using the two variables.
let firstname = "Ali";
let lastName = "Tan";
console.log(firstname + " " + lastName);

// ========================================
// Question 4 - Boolean
// ========================================
// Create a variable:
//
// isLoggedIn = true
//
// Use an if statement.
//
// If isLoggedIn is true,
// print:
//
// "Welcome back!"

let isLoggedIn = true;

if ((isLoggedIn = true)) {
  console.log("Welcome Back");
}
// ========================================
// Question 5 - Simple If Else
// ========================================
// Create a variable:
//
// age = 17
//
// If age is 18 or above,
// print:
//
// "You are an adult"
//
// Otherwise print:
//
// "You are under 18"

let age = 17;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are under 18");
}

// ========================================
// Question 6 - If Else with Number
// ========================================
// Create a variable:
//
// score = 65
//
// If score is 50 or above,
// print:
//
// "Pass"
//
// Otherwise print:
//
// "Fail"
let score = 65;
if (score >= 50) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// ========================================
// Question 7 - Positive or Negative
// ========================================
// Create a variable:
//
// number = -10
//
// If the number is greater than or equal to 0,
// print:
//
// "Positive"
//
// Otherwise print:
//
// "Negative"

let number = -10;
if (number >= 0) {
  console.log("Postive");
} else {
  console.log("Negative");
}

// ========================================
// Question 8 - Even or Odd
// ========================================
// Create a variable:
//
// number = 7
//
// Check whether the number is even or odd.
//
// Hint:
// You can use the % operator.
//
// Print either:
//
// "Even"
//
// or
//
// "Odd"
let nNumber = 7;
let evenOrOdd = nNumber % 2;
if (evenOrOdd == 1) {
  console.log("Odd");
} else {
  console.log("Even");
}

// ========================================
// Question 9 - Create an Array
// ========================================
// Create an array called fruits containing:
//
// "Apple"
// "Banana"
// "Orange"
//
// Print the whole array.
let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// ========================================
// Question 10 - Access Array Elements
// ========================================
// Given:
//
// let animals = ["Cat", "Dog", "Rabbit", "Bird"];
//
// Print:
// 1. "Cat"
// 2. "Rabbit"
//
// by accessing their positions in the array.
let animals = ["Cat", "Dog", "Rabbit", "Bird"];
console.log(animals[0] + " " + animals[2]);

// ========================================
// Question 11 - Modify an Array
// ========================================
// Given:
//
// let colours = ["Red", "Blue", "Green"];
//
// Change "Blue" into "Yellow".
//
// Then print the whole array.
//
// Expected:
//
// ["Red", "Yellow", "Green"]
let colours = ["Red", "Blue", "Green"];
colours[1] = "yellow";
console.log(colours);
// ========================================
// Question 12 - Array Length
// ========================================
// Given:
//
// let foods = ["Rice", "Noodles", "Burger", "Pizza"];
//
// Print how many items are inside the array.
//
// Expected:
//
// 4
let foods = ["Rice", "Noodles", "Burger", "Pizza"];
console.log(fruits.length + 1);
// ========================================
// Question 13 - If Else with Array Data
// ========================================
// Given:
//
// let prices = [10, 25, 8];
//
// Get the SECOND price from the array.
//
// If the price is greater than 20,
// print:
//
// "Expensive"
//
// Otherwise print:
//
// "Affordable"
let prices = [10, 25, 8];
let priceNoS = prices[1];
if (priceNoS > 20) {
  console.log("Expensive");
} else {
  console.log("Affordable");
}
// ========================================
// Question 14 - Find the Bigger Number
// ========================================
// Given:
//
// let numbers = [20, 35];
//
// Compare the two numbers.
//
// Print the bigger number.
//
// Expected:
//
// 35
let aNumbers = [20, 35];
if (aNumbers[0] > aNumbers[1]) {
  console.log(aNumbers[0]);
} else {
  console.log(aNumbers[1]);
}
// ========================================
// Question 15 - Mini Challenge
// ========================================
// A student has these three test scores:
//
// let scores = [70, 45, 80];
//
// Calculate the total score.
//
// Then calculate the average:
//
// average = total / 3
//
// If the average is 50 or above,
// print:
//
// "Student passed"
//
// Otherwise print:
//
// "Student failed"
//
// BONUS:
// Also print the student's average score.

let scores = [70, 45, 80];
let totalScore = scores[0] + scores[1] + scores[2];
let averageScore = totalScore / 3;

if (averageScore >= 50) {
  console.log("Student Passed");
} else {
  console.log("Student Failed");
}

console.log(averageScore);
