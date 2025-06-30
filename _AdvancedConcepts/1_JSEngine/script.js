function jsEngine(code) {
  return code.split(/\s+/);
}
console.log(jsEngine("var a = 5"));

// How JavaScript work?
// Code -> JS-Engine -> Browser/Machine
/*
JS-Engine
{
  Parser => Lexical-Analysis(tokens)
  AST => Abstract-Syntax-Tree
  Call-Stack[] => place to keep track of where we are in the code
  // each entry on the call-stack is called Frame
  // operates on the LIFO principal
  // Stack-Trace => snapshot of call-stack
  // Stack-Overflow => when call-stack size exceeded
  // Recursion is the common way to do stack-overflow
  Memory-Heap[] => place to store and write information
  // arrays, functions, objects and complex data-structures are stored
  // Garbage-Collection => Mark-Sweep 
  // Memory-Leak => when memory-heap size exceeded
  // global variables, event listeners, setInterval(), closure are the common ways to do memory-leak
  Interpreter/Ignition => read the code, run the code(no compilation)
  Bytecode => interpreter produces bytecode (low-level code but not as low-level as machine-code)
  Profiler/Monitor => tells how we can optimize the code
  JIT-Compiler/Turbo-Fan => read the code, understands it, convert the code into another language (machine-code), produces optimized code
  Optimized-Code => mixture of bytecode and machine-code (Don't use these things in your code [eval(), arguments, for-in loop, with, delete, hidden-classes, inline-caching])
}
// Single-Threaded => only 1 set of instruction is executed at a time (1 call-stack means single-threaded, Synchronous)
// Javascript Runtime => for Asynchronous behaviour [Call-Stack, Memory-Heap, Web-API[DOM, fetch(), setTimeout()], Event-Loop, Job-Queue, Callback-Queue, Worker-Threads]
// Node.js => Javascript Runtime
// Babel => Javascript compiler that takes your modern JS code and returns browser compatible JS.
// ECMAScript => is the standardized specification that defines how the JavaScript programming language should work. It ensures that JavaScript behaves the same way across all browsers and environments.
// WebAssembly => standard binary executable format
*/

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
