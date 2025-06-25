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

// Example of Nullish Coalescing
let userName = null;
let displayName = userName ?? "Guest"; // "Guest" if userName is null or undefined

// Example of Nullish Coalescing Assignment
let userAge = null;
userAge ??= 25; // Assigns 25 only if userAge is null or undefined