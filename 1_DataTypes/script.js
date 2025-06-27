// Declaring & Initializing variables using var, let, and const
var name = "John";
let age = 30;
const pi = 3.14;

// Reassigning variables
name = "Jane"; // Allowed
age = 31; // Allowed
// pi = 3.14159; // Not allowed, will throw an error

// Data-Types
/*
 * Primitive: Number (int, float, exponential), BigInt, Boolean, String, Null, Undefined, Symbol
 * Non-Primitive (Object/Reference): Array[], Function(), Object{}
 */

// Primitive Types
// Integer
let tint = 1;
// Float
let tfloat = 1.5;
// Exponential
let texponential = 1e2;
let texponential1 = 1e-2;
// BigInt
let tbigint = BigInt(1212112324324798324234838324);
// Boolean
let tboolean = true;
// String
let tstring = "Hello World"; // String (double quotes)
let tstring1 = "Hello World"; // String (single quotes)
let tstring2 = `Hello World`; // String (template literals)
// Null
let tnull = null;
// Undefined
let tundefined = undefined;
// Symbol
let tsymbol = Symbol("Hello");

// Non-Primitive Types
// Array
let tarray = [1, 2, 3, 4, 5];
// Function
let tfunction = () => {
  console.log("Hello from function");
};
// Object
let tobject = { name: "John", age: 30 };
// Date
const d = new Date();
// There are 9 ways to create a new date object:
new Date();
new Date(date);
new Date(year, month);
new Date(year, month, day);
new Date(year, month, day, hours);
new Date(year, month, day, hours, minutes);
new Date(year, month, day, hours, minutes, seconds);
new Date(year, month, day, hours, minutes, seconds, ms);
new Date(milliseconds);
// Set
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
// Map
// const fruits = new Map([
//   ["apples", 500],
//   ["bananas", 300],
//   ["oranges", 200]
// ]);
// Create a Map
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
