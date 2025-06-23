////////////////////////////////////
// if-else_if-else
// if (condition) {
//     // code to execute if condition is true
// } else if (anotherCondition) {
//     // code to execute if anotherCondition is true
// } else {
//     // code to execute if none of the above conditions are true
// }
// comparison operators
// <, >, <=, >=, ==, !=, ===, !==
// // logical operators
// &&, ||, !
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName !== "Steve")) {
    // run the code
}
else if (x < 10 && y > 5) {
    // run the code
} else {
    // run the code
}
  

////////////////////////////////////
// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }
const month = "march"
switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}


// Ternary Operator
// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


// Optional Chaining and Nullish Coalescing
// Modern operators for safer property access:
// ?. Optional chaining
// ?? Nullish coalescing
// ??= Nullish coalescing assignment

// Example of Optional Chaining
const user = {
    name: "John",
    address: {
        city: "New York"
    }
};

// Accessing nested properties safely
const city = user.address?.city; // "New York"
const country = user.address?.country ?? "USA"; // "USA" if country is undefined

// Example of Nullish Coalescing Assignment
let userAge = null;
userAge ??= 25; // Assigns 25 only if userAge is null or undefined

// Example of Nullish Coalescing
let userName = null;
let displayName = userName ?? "Guest"; // "Guest" if userName is null or undefined