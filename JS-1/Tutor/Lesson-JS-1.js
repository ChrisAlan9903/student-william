// Lesson JS 1 - Variables & Data Types

console.log();

// Lesson 1.a : Variables
// 1. Think of it as a box to hold a value.
// 2. Need to know how to declare and initialize.

// example of declaring (creating a variable)
var numberBox;

numberBox = 40;

// example of declaring and initializing (creating a variable, then assign a value)
var age = 18;

// another keyword to create a variable (let & const)

let betterBox;

betterBox = 40;

betterBox = 10;

console.log(betterBox);

// const is special (constant), need to initialize on create, and value cannot be changed later (immutable)
const pi = 3.1415;

// pi = 3.12; (will error)

// Lesson 1.b : Data Types

// 1. There are a few data types in JS
//  a. number
//  b. string (character or text)
//  c. boolean (either True or False)
//  d. array
//  e. object (key-value pair)
//  f. null
//  g. undefined

// Example - number
let number = 1234;

// Example - string
let dog = "Chris";

let cat = "#"; //any symbol, including space and number is also a string

let string3 =
  " I am a dedicated student pursuing my passion for technology and design. My journey began with a curiosity about how things work on the web, which led me to dive deep into front-end development and UI/UX principles. 2138213124";

console.log(cat);

console.log("2536871648124 + 2618936123912312");

// console.log(2536871648124 + 2618936123912312);
