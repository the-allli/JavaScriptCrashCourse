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
