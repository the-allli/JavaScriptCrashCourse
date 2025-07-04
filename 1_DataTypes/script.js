// Declaring & Initializing variables using var, let, and const
var name = "John"; // don's use var
let age = 30;
const pi = 3.14;

// Reassigning variables
name = "Jane"; // Allowed
age = 31; // Allowed
// pi = 3.14159; // Not allowed, will throw an error

// Data-Types
/*
 * Primitive: Number (int, float, exponential), BigInt, Boolean, String, Null, Undefined, Symbol
 * Non-Primitive (Object/Reference): Array[], Function(), Object{}, set(), map(), etc
 */

// Primitive Types
// Integer
let tInt = 1;
// Float
let tFloat = 1.5;
// Exponential
let tExponential = 1e2;
let tExponential1 = 1e-2;
// BigInt
let tBigint = BigInt(1212112324324798324234838324);
// Boolean
let tBoolean = true;
// String
let tString = "Hello World"; // String (double quotes)
let tString1 = "Hello World"; // String (single quotes)
let tString2 = `Hello World`; // String (template literals)
// Null
let tNull = null;
// Undefined
let tUndefined = undefined;
// Symbol
let tSymbol = Symbol("Hello");

// Non-Primitive Types
// Array
let tArray = [1, 2, 3, 4, 5];
// Function
function tFunnction() {}
// Object
let tObject = { name: "John", age: 30 };
// Set
const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
// Map
const fruits = new Map();
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
