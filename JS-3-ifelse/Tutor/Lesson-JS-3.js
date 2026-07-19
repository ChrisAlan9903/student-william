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
