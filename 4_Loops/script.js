// Loops in JavaScript

// For loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}


// While loop
let j = 0;
while (j < 5) {
    console.log("While Loop Iteration:", j);
    j++;
}


// Do-while loop
let k = 0;
do {
    console.log("Do-While Loop Iteration:", k);
    k++;
} while (k < 5);


// For...of loop
const array = [1, 2, 3, 4, 5];
for (const value of array) {
    console.log("For...of Loop Value:", value);
}


// For...in loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log("For...in Loop Key:", key, "Value:", object[key]);
}


// Nested loops
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log("Nested Loop Iteration:", i, j);
    }
}


// Loop control statements
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the rest of the loop when i is 2
    }
    if (i === 4) {
        break; // Exit the loop when i is 4
    }
    console.log("Loop Control Statement Iteration:", i);
}


// Using labels with loops
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop; // Break out of the outer loop
        }
        console.log("Labeled Loop Iteration:", i, j);
    }
}


// Looping through a string
const str = "Hello";
for (let i = 0; i < str.length; i++) {
    console.log("String Character:", str[i]);
}
// Looping through an array with index
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log("Fruit at index", i, "is", fruits[i]);
}
// Using forEach with arrays
fruits.forEach((fruit, index) => {
    console.log("Using forEach - Fruit at index", index, "is", fruit);
});
// Using map to create a new array
const doubled = array.map(num => num * 2);
// Using filter to create a new array with condition
const evenNumbers = array.filter(num => num % 2 === 0);
// Using reduce to accumulate values
const sum = array.reduce((acc, num) => acc + num, 0);
// Using some to check if any element meets a condition
const hasEven = array.some(num => num % 2 === 0);
// Using every to check if all elements meet a condition
const allPositive = array.every(num => num > 0);
// Using find to get the first element that meets a condition
const firstEven = array.find(num => num % 2 === 0);
// Using findIndex to get the index of the first element that meets a condition
const firstEvenIndex = array.findIndex(num => num % 2 === 0);
