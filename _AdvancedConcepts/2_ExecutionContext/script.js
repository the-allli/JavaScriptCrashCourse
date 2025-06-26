// Remember Call-Stack
// Execution-Context: tells you which lexical-environment is currently running

// Global Execution Context
/*
Creation Phase = global, this, window 
1. Global object created
2. Initializes this keyword to global in-case of local machine, in-case of browser initializes this keyword to window
// this => is the object that the function is a property of, gives methods access to their object, execute same code for multiple objects
Execution Phase = Run your code
3. Variable Environment created - memory space for var variables and func ons
created
4. Initializes all variables to undefined (also known as hoisting) and places them into memory
"Hoisting" = is the behaviour of moving variables or function declaration to the top of their respective environment during compilation phase.
// variables are partially hoisted and function declarations are fully hoisted.
*/

// Functional Execution Context
/*
Creation Phase = global, arguments, window, this
1. Argument object created with any arguments
2. Sets this to the global object unless in strict mode, where it’s undefined
Execution Phase =
3. Variable Environment created - memory space for variable and functions created
4. Initializes all variables to undefined and places them into memory
*/
function printName() {
  console.log("ALI");
}
function findName() {
  return printName();
}
function sayName() {
  return findName();
}
sayName();

// Function invocation
/*
// this, arguments
"this" => is the object that the function is a property of, gives methods access to their object, execute same code for multiple objects
"arguments" => on each execution context, we get arguments object which contains the arguments passed to a function
Variable Environment = variables created inside each execution context are stored in variable environment.
*/
// Function Declarations are fully Hoisted but Function Expressions don't. 

// Function Declaration
function pakistan(){
  console.log("Hot");
}

// Function Expression
var canada = () => {
  console.log("Cold");
}

// Function Invocation/Call/Execution
canada();
pakistan();


function marry(...args){
  console.log(args);
  console.log(arguments);
  console.log(Array.from(arguments));
  return `${args[0]} is now married to ${args[1]}`;

}
marry('moosa','rubab');

// Variable Environment
function two(){
  var isValid;
}
function one(){
  var isValid = true;
  two();
}
var isValid = false;
one();