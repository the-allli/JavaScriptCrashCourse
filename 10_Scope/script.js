// Types of Scope in JavaScript
// 1. Global Scope
// Variables declared outside any function/block are in the global scope. Accessible everywhere in your code.

let globalVar = "I am global";

function greet() {
  console.log(globalVar); // Accessible here
}

greet();
console.log(globalVar); // Accessible here too

// 2. Function (Local) Scope
// Variables declared inside a function are only accessible within that function.
function sayHello() {
    let message = "Hello!";
    console.log(message); // Works
  }
  
sayHello();
console.log(message); // Error: message is not defined
  
// 3. Block Scope (let and const)
// Variables declared with let or const inside {} (block) are only available within that block.
{
    let x = 10;
    const y = 20;
    console.log(x, y); // Works
}
console.log(x, y); // Error: x and y are not defined

// var does not have block scope. It only has function scope.
{
    var z = 30;
}
console.log(z); // Works! (bad practice)

// 4. Lexical Scope (Closures)
// A function can access variables from its parent scope, even after the parent function has closed.
function outer() {
    let outerVar = "I'm outside!";
  
    function inner() {
      console.log(outerVar); // Accesses outerVar
    }
  
    return inner;
}

const myFunc = outer();
myFunc(); // Logs: "I'm outside!"
  