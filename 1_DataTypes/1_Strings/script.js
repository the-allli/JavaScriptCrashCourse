// Strings as Objects
let str = new String("Hello World");
console.log(str); // Output: [String: 'Hello World']
console.log(typeof str); // Output: object

// Strings as Primitive Type
let originalString = "Hello World";
let upperCaseString = originalString.toUpperCase();

let lowerCaseString = originalString.toLowerCase();

let trimmedString = "   Hello World   ".trim();

let replacedString = originalString.replace("World", "JavaScript");

// String concatenation
let concatenatedString = originalString + " - Welcome!";

// String interpolation
let name = "Alice";
let greeting = `Hello, ${name}!`;

// String length
console.log(originalString.length); // Output: 11

// Accessing characters in a string
console.log(originalString[0]); // Output: H
console.log(originalString.charAt(1)); // Output: e

// Splitting a string into an array
let wordsArray = originalString.split(" ");

// Joining an array into a string
let joinedString = wordsArray.join(", ");

// Checking if a string includes a substring
let includesWorld = originalString.includes("World");

// Finding the index of a substring
let indexOfWorld = originalString.indexOf("World");

// Extracting a substring
let substring = originalString.substring(0, 5);

// Repeating a string
let repeatedString = "Ha".repeat(3);

// Converting a string to an array of characters
let charArray = Array.from(originalString);

// Checking if a string starts with a specific substring
let startsWithHello = originalString.startsWith("Hello");

// Checking if a string ends with a specific substring
let endsWithWorld = originalString.endsWith("World");
