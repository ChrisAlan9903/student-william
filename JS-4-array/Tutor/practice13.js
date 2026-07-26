// Practice 1 - Creating array

// Question 1
// Create an array called "fruits".
// Store 5 different fruit names inside the array.
//
// Example:
// ["Apple", "Banana", "Orange", "Mango", "Grape"]

let fruits = ["Apple", "Banana", "Mango", "Grape"];

// Question 2
// Create an array called "scores".
// Store 5 exam scores inside the array.
//
// Example:
// [80, 90, 75, 60, 100]

let scores = [80, 90, 75, 60, 100];

// Question 3
// Create an array called "colors".
// Store 4 different colors inside the array.

let colors = ["Red", "Orange", "Yellow", "Green"];

// Question 4
// Create an array called "movies".
// Store 3 movie names inside the array.

let movies = ["Spiderman", "Titanic", "Mission Possible"];

// Question 5
// Create an array called "studentInfo".
// Store:
// - student name
// - student age
// - student class
//
// Example:
// ["Ali", 15, "Form 3"]

let studentInfo = ["Mohamad", "40", "Form 6"];

/*

 Practice 2 - Accessing data/element in array


*/

// Question 1
// Print the first fruit from the array.
console.log(fruits[0]);

// Question 2
// Print the second number from the array.

let numbers = [10, 20, 30, 40];
console.log(numbers[1]);

// Question 3
// Print the last color from the array.

let aColors = ["Red", "Blue", "Green", "Yellow"];
console.log(aColors[3]);

// Question 4
// Print the third movie name.

let aMovies = ["Avatar", "Titanic", "Frozen", "Batman"];
console.log(aMovies[2]);

// Question 5
// Create a variable called "highestScore".
// Store the last score from the array into the variable.
// Then print it.

let aScores = [70, 80, 90, 100];
aScores.push("highestScore");
console.log(aScores);

// Question 1
// Change "Apple" into "Mango".

let aFruits = ["Apple", "Banana", "Orange"];
aFruits[0] = "Mango";
console.log(aFruits);

// Question 2
// Change the first score to 100.

let bScores = [70, 80, 90];
bScores[0] = 100;
console.log(bScores);

// Question 3
// Change the third color to "Black".

let bColors = ["Red", "Blue", "Green"];
bColors[2] = "Black";
console.log(bColors);

// Question 4
// Change the second movie name.
let bMovies = ["Avatar", "Titanic", "Frozen"];
bMovies[1] = "Not Titanic";
console.log(bMovies);

// Question 5
// Change the student's age to 16.

let aStudentInfo = ["Ali", 15, "Form 3"];
aStudentInfo[1] = 16;
console.log(aStudentInfo);
