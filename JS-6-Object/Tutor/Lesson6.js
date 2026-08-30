// LESSON 6: OBJECT
// What is Object: a type of variable to store data in KEY-VALUE pairs (when data has properties)
// When to use Object: When we want group related data and behaviors into a single standalone entity
// How to use (syntax):

// 6.a: Creating a variable
let myDog = {
  name: "Popy",
  breed: "Shiba Inu",
  age: 2,
  isVacinated: true,
  favouriteFood: ["chicken", "beef"],
  address: {
    street: "Jalan 1",
    state: "KL",
  },
};

// 6b: Accessing data in object

// console.log(myDog.name);
// console.log(myDog.favouriteFood[1]);
// console.log(myDog.address.street);

//6c: Update data in object
myDog.name = "Popiah";
console.log(myDog.name);
console.log(myDog);

// 6d: Add new property to an object
myDog.color = "Brown";
console.log(myDog);

// 6e: Function tied to an object
let myCat = {
  name: "Kitty",
  color: "orange",
  gender: "male",

  makeSound: function () {
    console.log("Meooooowwwwwww");
  },
};

console.log(myCat.color);
console.log(myCat.makeSound());

myCat.makeSound();
console.log();

let arrya = [1, 3, 4];

arrya.length;

arrya.push();
