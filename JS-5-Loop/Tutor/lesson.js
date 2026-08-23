// Lesson JS 5: Loops
// - What: Loop is an operation that we use to do repetitive operation
// - When: When we need to do repetitive stuff
// - Types loops:
// a. For loop
// b. While loop
// c. Do while loop
// d. For of loop
// e. For in loop

// Lesson 5a: For Loop
// Note: We need to know/have a way to know how many times to loop.

// Syntax:

for (let index = 1; index < 10; index++) {
  console.log("Hello World");
  console.log("This is current index", index);
}

// Situation: user can enter different amount of data.
let array = [20, 30, 40, 20, 30, 20];

let sum = 0;
for (let index = 1; index <= array.length; index++) {
  sum = sum + array[index];
  console.log("round: ", index);
}

// Lesson 5b: For of loop
// Note: used more in web dev, because it works well with array.

let array2 = [20, 30, 40, 20, 30, 20];

// Syntax:

let sum2 = 0;
let counter = 0;
for (let item of array2) {
  sum2 = sum2 + item;
  counter++;
}

console.log("counter :", counter);
