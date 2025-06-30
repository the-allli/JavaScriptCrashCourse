// Memoization => code optimization technique, Memoization is a way to cache a return value of a function based on its parameters. This makes the function that takes a long time to run much faster after one execution. If the parameter changes, it will still have to re-evaluate the function.
// Bad Way
// function addTo80(n) {
//   console.log('long time...')
//   return n + 80
// }
// addTo80(5)
// addTo80(5)
// addTo80(5)
// Memoized Way
function memoizedAddTo80() {
  let cache = {};
  return function (n) {
    // closure to access cache obj
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time...");
      cache[n] = n + 80;
      return cache[n];
    }
  };
}
const memoized = memoizedAddTo80();
console.log("1.", memoized(5));
console.log("2.", memoized(5));
console.log("4.", memoized(10));

// These things will make your code de-optimize, don't use these things in your code (hidden-classes, inline-caching, eval(), arguments, for-in loop, with, delete)
// Hidden-Classes
// Order should be same for properties OR assign properties of an object in its Constructor
// function Animal(x,y){
//   this.x = x;
//   this.y = y;
// }
// const obj1 = new Animal(1,2);
// const obj2 = new Animal(3,4);
// obj1.x = 30;
// obj1.y = 100;
// obj2.y = 30;
// obj2.x = 100;
class Animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);
obj1.x = 30;
obj1.y = 100;
obj2.x = 30;
obj2.y = 100;

// Inline-Caching
// Use dynamic property access(.), Using bracket notation makes it harder for the engine to inline cache.
// function findUser(user) {
//   return `found ${user["firstName"]} ${user["lastName"]}`;
// }
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}
const userData = {
  firstName: "Ali",
  lastName: "Haider",
};
findUser(userData);

// Eval
// Executes arbitrary code (dangerous!), Prevents JS engines from optimizing, Security risk if userInput is untrusted
// const userInput = "2 + 2";
// const result = eval(userInput); // Executes string as code
// console.log(result); // 4
// Better Alternative (use Function, or parse safely)
// Safe expression parser (limited to numbers and operators)
function safeEvaluate(expression) {
  if (/^[0-9+\-*/ ().]+$/.test(expression)) {
    return Function(`"use strict"; return (${expression})`)();
  } else {
    throw new Error("Unsafe input!");
  }
}
const userInput = "2 + 2";
console.log(safeEvaluate(userInput)); // 4

// Arguments
// Not a real array, Confusing behavior in arrow functions or strict mode, Slower and de-optimizes functions
// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// Better Alternative Rest Parameters
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

// for-in Loop
// It iterates over all enumerable properties, including inherited ones. Order is not guaranteed.
const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(obj[key]); // use Object.keys or for-of
// }
for (const key of Object.keys(obj)) {
  console.log(obj[key]);
}

// With
// Makes variable resolution ambiguous, Disallowed in strict mode, Breaks optimization
const person = {
  name: "Ali",
  age: 30,
};
// with (person) {
//   console.log(name); // Looks like a global variable, but it's person.name
// }
// use object destructuring
const { name } = person;
console.log(name); // Ali

// Delete
// Breaks hidden class optimizations. Slows down object access.
const user = { name: "Ali", age: 30 };
// delete user.age; // de-optimizes
user.age = undefined; // Keeps the shape intact
