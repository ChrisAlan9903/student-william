// Lesson 3: Conditionals (if - else)

// Syntax and Keyword

if (condition) {
  // code to run or not. eg:

  console.log("Hello");
}

// the rest of the code ...

// Example of code:

let condition = false;

if (condition) {
  console.log("Run this");
}

console.log("This is outside of the If statement");

// Example 2:

if (10 <= 2) {
  console.log("Example 2: Run this");
}

console.log("This is outside of the If statement");

// Example 3:

let variableA = 10;
let variableB = 20;

if (variableA == variableB) {
  console.log("Both variable has same value");
}

console.log("Operation finished");

// Example 4: Login

let password = "1234heheh";

let userInputPassword = "1234heheh";

if (password === userInputPassword) {
  console.log("Login success ! Redirecting to home page...");
}

// Lesson 3.2: If block and else block

// Syntax and keyword

if (condition) {
  // code to run when condition is true
} else {
  // run when none of the above condition is true
}

// Example:
if (1 < 2) {
  console.log("Condition is true");
} else {
  console.log("Condition is anything other true");
}

console.log("This is outside of the If statement");

// Lesson 3.3: If, Else, and Elseif (when choice is more than 2)

// Suppose you need to print the grade of your exam.
// 80 above is A
// 50-79 is B
// 49-30 and below is C
// 29 and below is D

let marks = 17; // user input

if (marks >= 80) {
  console.log("Grade : A");
} else if (marks >= 50 && marks <= 79) {
  console.log("Grade : B");
} else if (marks >= 30 && marks <= 49) {
  console.log("Grade : C");
} else {
  console.log("Grade : D");
}

if (marks >= 80) {
  console.log("Grade : A");
} else if (marks >= 50 && marks <= 79) {
  console.log("Grade : B");
} else if (marks >= 30 && marks <= 49) {
  console.log("Grade : C");
}

// Note: Real world dev prefer writing like below because its cleaner to read
if (marks >= 80) {
  ("Grade : A");
}
if (marks >= 50 && marks <= 79) {
  ("Grade : B");
}
if (marks >= 30 && marks <= 4980) {
  ("Grade : C");
}

// Mini Lesson: Logical Operator

// AND Operator ( && )
// Explanation: both left and right has to true for the output to be true. if either one or both false, it will output false.

console.log(true && true); // this will output true
console.log(true && false); // this will output false

// OR Operator ( || )
// Explanation: only either one needs to be true for the output to be true. need both to be false for output = false
console.log(true || false); // this will output true
console.log(true || true); // this will output true
console.log(false || false); // this will output false
