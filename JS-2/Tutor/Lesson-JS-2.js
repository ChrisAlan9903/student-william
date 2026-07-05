/* Lesson 2: Operators
    Types of operators: 
        1. Math operator
        2. Comparison operator
        3. Logical operator
*/

// 2.a: Math operator
//  + , - , * , / , % , ()
let triangle = 20 * 10 * (1 / 2);
// console.log(triangle);

let width = 10;
let height = 30;
const pi = 3.142;

let rectangle = width * height;
// console.log(rectangle);

// console.log(10 % 1);
// console.log(10 % 2);
// console.log(10 % 3);
// console.log(10 % 4);
// console.log(10 % 5);

// 2b: Comparative operators
// 1. Used to compare item on left and right
// 2. The output is ALWAYS a boolean (true / false)

// Bigger than ( > )
let check1 = 10 > 5;

console.log(check1);
console.log(10 > 10);

// Smaller than ( < )
let check2 = 10 < 5;

console.log(check2);
console.log(3 < 20);

// Bigger than or equals to (>=)
let check3 = 10 >= 9;

console.log(10 >= 9);
console.log(10 >= 10);

// Smaller than or equals to (<=)

console.log(4 <= 5);
console.log(4 <= 4);

// Equals to (==)
console.log("\n ");

let userAge = 10;

console.log(userAge == 18);

let name = "william";
console.log(name == "William");

// Strict equals to (===)
console.log("\n ");
console.log(100 == "100");

console.log(100 === "100");

// Not equals to (!=)
console.log("\n ");

console.log(100 === 100);
console.log(100 != 100);
console.log(100 != 99);

// Not operator (!)
console.log("\n ");

let flag = false;

console.log(!flag);
