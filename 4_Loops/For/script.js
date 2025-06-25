// For loop
for (let i = 0; i < 5; i++) {
    console.log("For Loop Iteration:", i);
}

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