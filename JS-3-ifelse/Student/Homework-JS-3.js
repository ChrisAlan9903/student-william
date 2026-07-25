// ==============================
// EASY QUESTIONS
// ==============================

// 1. Create a variable called age with the value 15.
// If age is greater than or equal to 18, print "Adult".
// Else if age is greater than or equal to 13, print "Teenager".
// Else, print "Child".
let age = 15;

if (age >= 18) {
  console.log(Adult);
}
if (age >= 13 && age < 18) {
  console.log("Teenager");
} else {
  console.log("Child");
}

// 2. Create a variable called score with the value 75.
// If score is greater than or equal to 80, print "Excellent".
// Else if score is greater than or equal to 50, print "Pass".
// Else, print "Fail".
let score = 75;

if (score >= 80) {
  console.log("Excellent");
}
if (score >= 50 && score < 80) {
  console.log("Pass");
} else {
  console.log(Fail);
}
// 3. Create a variable called temperature with the value 28.
// If temperature is greater than 30, print "Hot".
// Else if temperature is greater than or equal to 20, print "Warm".
// Else, print "Cold".
let temperature = 28;

if (temperature > 30) {
  console.log("Hot");
}
if (temperature >= 20 && temperature < 30) {
  console.log("Warm");
} else {
  console.log("Cold");
}

// 4. Create a variable called number with the value 0.
// If number is greater than 0, print "Positive".
// Else if number is equal to 0, print "Zero".
// Else, print "Negative".
let number = 0;

if (number > 0) {
  console.log("Positive");
}
if (number == 0) {
  console.log("Zero");
} else {
  console.log("Negative");
}

// 5. Create a variable called money with the value 50.
// If money is greater than 50, print "More than enough money".
// Else if money is equal to 50, print "Exactly enough money".
// Else, print "Not enough money".
let money = 50;

if (money > 50) {
  console.log("More than enough money");
}
if (money == 50) {
  console.log("Exactly enough money");
} else {
  console.log("Not enough money");
}
// 6. Create a variable called height with the value 150.
// If height is greater than 150, print "Tall enough".
// Else if height is equal to 150, print "Exactly the minimum height".
// Else, print "Not tall enough".
let height = 150;

if (height > 150) {
  console.log("Tall enough");
}
if (height == 150) {
  console.log("Exactly the minimum height");
} else {
  console.log("Not tall enough");
}
// 7. Create a variable called battery with the value 50.
// If battery is greater than 70, print "High battery".
// Else if battery is greater than or equal to 30, print "Medium battery".
// Else, print "Low battery".
let battery = 50;

if (battery > 70) {
  console.log("High battery");
}
if (battery >= 30 && battery <= 70) {
  console.log("Medium battery");
} else {
  console.log("Low battery");
}
// 8. Create a variable called dayNumber with the value 2.
// If dayNumber is equal to 1, print "Monday".
// Else if dayNumber is equal to 2, print "Tuesday".
// Else, print "Another day".
let dayNumber = 2;

if (dayNumber == 1) {
  console.log("Monday");
}
if (dayNumber == 2) {
  console.log("Tuesday");
} else {
  console.log("Other day");
}

// 9. Create a variable called speed with the value 60.
// If speed is greater than 80, print "Too fast".
// Else if speed is greater than or equal to 40, print "Normal speed".
// Else, print "Too slow".
let speed = 60;

if (speed > 80) {
  console.log("Too fast");
}
if (speed >= 40 && speed <= 80) {
  console.log("Normal speed");
} else {
  console.log("Too slow");
}

// 10. Create a variable called itemCount with the value 5.
// If itemCount is greater than 5, print "Many items".
// Else if itemCount is equal to 5, print "Exactly 5 items".
// Else, print "Few items".
let itemCount = 5;

if (itemCount > 5) {
  console.log("Many items");
}
if (itemCount == 5) {
  console.log("Exactly 5 items");
} else {
  console.log("Few items");
}

// ==============================
// MEDIUM QUESTIONS
// ==============================

// 11. Create two variables called num1 and num2 with the values 10 and 10.
// If num1 is greater than num2, print "num1 is greater".
// Else if num1 is equal to num2, print "Both numbers are equal".
// Else, print "num2 is greater".
let num1 = 10;
let num2 = 10;

if (num1 > num2) {
  console.log("Number 1 is greater");
}
if (num1 == num2) {
  console.log("Both numbers are equal");
} else {
  console.log("Number 2 is greater");
}

// 12. Create two variables called price and quantity with the values 20 and 3.
// Calculate the total price using price * quantity.
// If the total price is greater than 100, print "Expensive purchase".
// Else if the total price is greater than or equal to 50, print "Normal purchase".
// Else, print "Cheap purchase".
let price = 20;
let quantity = 3;
let totalPrice = price * quantity;

if (totalPrice > 100) {
  console.log("Expensive purchase");
}
if (totalPrice >= 50 <= 100) {
  console.log("Normal purchase");
} else {
  console.log("Cheap purchase");
}

// 13. Create two variables called mark1 and mark2 with the values 35 and 25.
// Calculate the total mark using mark1 + mark2.
// If the total mark is greater than or equal to 80, print "Excellent result".
// Else if the total mark is greater than or equal to 50, print "Pass result".
// Else, print "Fail result".
let mark1 = 35;
let mark2 = 25;
let totalMark = mark1 + mark2;

if (totalMark >= 80) {
  console.log("Excellent results");
}
if (totalMark >= 50 && totalMark < 80) {
  console.log("Pass result");
} else {
  console.log("Fail result");
}
// 14. Create a variable called number with the value 15.
// If number % 2 is equal to 0, print "Even number".
// Else if number % 5 is equal to 0, print "Divisible by 5".
// Else, print "Other number".
let tnumber = 15;

if (tnumber % 2 == 0) {
  console.log("Even number");
}
if (tnumber % 5 == 0) {
  console.log("Divisible by 5");
} else {
  console.log("Other number");
}

// 15. Create two variables called totalMoney and people
// with the values 90 and 3.
// Calculate how much each person receives using totalMoney / people.
// If each person receives more than 30, print "High amount".
// Else if each person receives exactly 30, print "Exactly 30 each".
// Else, print "Low amount".
let totalMoney = 90;
let people = 3;
let fairShare = totalMoney / people;

if (fairShare > 30) {
  console.log("High amount");
}
if (fairShare == 30) {
  console.log("Exactly 30 each");
} else {
  console.log("Low amount");
}

// ==============================
// HARD QUESTIONS
// ==============================

// 16. Create three variables called itemPrice, quantity and discount
// with the values 30, 4 and 20.
// Calculate the total price using itemPrice * quantity.
// Calculate the final price using total price - discount.
// If the final price is greater than 100, print "High final price".
// Else if the final price is greater than or equal to 80, print "Medium final price".
// Else, print "Low final price".
let itemPrice = 30;
let tquantity = 4;
let discount = 20;
let atotalPrice = itemPrice * tquantity;
let finalPrice = atotalPrice - discount;

if (finalPrice > 100) {
  console.log("High final price");
}
if (finalPrice >= 80 ** finalPrice <= 100) {
  console.log("Medium final price");
} else {
  console.log("Low final price");
}

// 17. Create three variables called exam1, exam2 and exam3
// with the values 80, 70 and 60.
// Calculate the total score.
// Calculate the average score by dividing the total score by 3.
// If the average is greater than or equal to 80, print "Grade A".
// Else if the average is greater than or equal to 60, print "Grade B".
// Else, print "Grade C".
let exam1 = 80;
let exam2 = 70;
let exam3 = 60;
let totalScore = exam1 + exam2 + exam3;
let averageScore = totalScore / 3;

if (averageScore >= 80) {
  console.log("Grade A");
}
if (averageScore >= 60 && averageScore < 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}

// 18. Create three variables called length, width and targetArea
// with the values 8, 5 and 40.
// Calculate the area using length * width.
// If the area is greater than targetArea, print "Area is too large".
// Else if the area is equal to targetArea, print "Area is correct".
// Else, print "Area is too small".
let length = 8;
let width = 5;
let targetArea = 40;
let area = length * width;

if (area > targetArea) {
  console.log("Area is too large");
}
if (area == targetArea) {
  console.log("Area is correct");
} else {
  console.log("Area is too small");
}

// 19. Create three variables called wallet, itemPrice and quantity
// with the values 100, 30 and 3.
// Calculate the total cost using itemPrice * quantity.
// Calculate the remaining money using wallet - total cost.
// If the remaining money is greater than 20, print "A lot of money left".
// Else if the remaining money is greater than or equal to 10,
// print "Some money left".
// Else, print "Very little money left".
let wallet = 100;
let titemPrice = 30;
let aquantity = 3;
let ttotalCost = titemPrice * aquantity;
let remainingMoney = wallet - ttotalCost;

if (remainingMoney > 20) {
  console.log("Alot of money left");
}
if (remainingMoney >= 10 && remainingMoney < 20) {
  console.log("Some money left");
} else {
  console.log("Very little money left");
}
// 20. Create four variables called basicSalary, overtimeHours,
// overtimeRate and targetSalary with the values 2000, 10, 20 and 2200.
// Calculate the overtime payment using overtimeHours * overtimeRate.
// Calculate the final salary using basicSalary + overtime payment.
// If the final salary is greater than targetSalary,
// print "Target salary exceeded".
// Else if the final salary is equal to targetSalary,
// print "Target salary reached".
// Else, print "Target salary not reached".

let basicSalary = 2000;
let overtimeHours = 10;
let overtimeRate = 20;
let targetSalary = 2200;
let overtimePayment = overtimeHours * overtimeRate;
let finalSalary = basicSalary + overtimePayment;

if (finalSalary > targetSalary) {
  console.log("Target salary exceeded");
}
if (finalSalary == targetSalary) {
  console.log("Target salary reached");
} else {
  console.log("Target salary not reached");
}
