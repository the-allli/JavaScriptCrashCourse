// Declaring & Initializing variables using var, let, and const
var name = "John";
let age = 30;
const pi = 3.14; 

// Reassigning variables
name = "Jane"; // Allowed
age = 31; // Allowed
// pi = 3.14159; // Not allowed, will throw an error

// Data Types
/*
 * Primitive: Number (int, float, exponential), BigInt, Boolean, String, Null, Undefined, Symbol
 * Non-Primitive (Object/Reference): Array[], Function(), Object{}
*/

// Primitives
let tint = 1;  // Integer
let tfloat = 1.5;  // Float
let texponential = 1e2;  // Exponential
let texponential1 = 1e-2;  // Exponential
let tbigint = BigInt(1212112324324798324234838324);  // BigInt
let tboolean = true;  // Boolean
let tstring = "Hello World";  // String (double quotes)
let tstring1 = 'Hello World';  // String (single quotes)
let tstring2 = `Hello World`;  // String (template literals)
let tnull = null;  // Null
let tundefined;  // Undefined
let tsymbol = Symbol("Hello");  // Symbol

// Reference Types
// Array
let tarray = [1, 2, 3, 4, 5];
// Function
// Internally, a function is a special kind of object with callable behavior.
let tfunction = () => { console.log("Hello from function"); };
// Object
let tobject = { name: "John", age: 30 };  
