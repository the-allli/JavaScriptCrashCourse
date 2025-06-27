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
