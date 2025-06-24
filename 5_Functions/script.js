// Named Function with Parameters and Return Value
function greet(name) {
    return `Hello, ${name}!`;
}
// Function with Default Parameters
function multiply(a, b = 1) {
    return a * b;
}
// Function with Rest Operator for Variable Number of Arguments
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}


// Anonymous Function
const farewell = function(name) {
    return `Goodbye, ${name}!`;
};


// Arrow Function
const sayHi = (name) => `Hi, ${name}!`;


// IIFE
( () => {
}) ();
// Named IIFE
(function chai (){
}) ();
// IIFE with parameter and return value
( (num) => {
    return num * 2;
}) (5);


// Function with Callback
function processData(data, callback) {
    const processedData = data.map(item => item * 2);
    callback(processedData);
}
// callback function
function displayData(data) {
}
// Using the processData function with a callback
processData([1, 2, 3], displayData);


// Function with Promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}


// Function with Async/Await
async function asyncFunction() {
    const data = await fetchData();
}


// Function with bind, call, and apply
function introduce(greeting) {
    return `${greeting}, my name is ${this.name}`;
}
const user = { name: "Bob" };
// Using bind
const boundIntroduce = introduce.bind(user);
console.log(boundIntroduce("Hi")); // Output: Hi, my name is Bob
// Using call
console.log(introduce.call(user, "Hello")); // Output: Hello, my name is Bob
// Using apply
console.log(introduce.apply(user, ["Greetings"])); // Output: Greetings, my name is Bob


// Function with closure
function makeCounter() {
    let count = 0;
    return {
        increment: () => count++,
        getCount: () => count
    };
}


// First-Class Functions
function executeFunction(fn) {
    fn();
}
executeFunction(() => console.log("Executed!"));


// Higher-Order Functions
function higherOrder(fn) {
return function () {
    fn();
};
}
let newFunction = higherOrder(() => console.log("Higher-Order Function"));
newFunction();


// Function with memoization
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}
// Example usage of memoization
const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});


// Function with generator
function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
