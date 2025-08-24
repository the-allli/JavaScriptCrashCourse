// Assign a function to a variable
const greet = function () {
  console.log("Hello!");
};
greet(); // "Hello!"

// Pass a function as an argument
function sayHello(callback) {
  callback();
}
sayHello(greet); // "Hello!"

// Return a function from another function
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const multiplyByFive = createMultiplier(5);
console.log(multiplyByFive(10)); // 50
