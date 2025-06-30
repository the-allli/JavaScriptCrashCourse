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
// Use dynamic property access, Using bracket notation makes it harder for the engine to inline cache.
// function findUser(user){
//   return `found ${user.firstName} ${user.lastName}`
// }
function findUser(user) {
  return `found ${user["firstName"]} ${user["lastName"]}`;
}
const userData = {
  firstName: "Ali",
  lastName: "Haider",
};
findUser(userData);
