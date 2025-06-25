// Arrays built-in methods

// Finding length of an array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // Output: 5

// Accessing elements in an array
console.log(numbers[0]); // Output: 1

// Modifying elements in an array
numbers[2] = 10;

// Adding elements to an array
numbers.push(6);

// Removing elements from an array
numbers.pop();

// Adding elements to the beginning of an array
numbers.unshift(0);

// Removing elements from the beginning of an array
numbers.shift();

// Finding the index of an element in an array
let index = numbers.indexOf(10);

// Checking if an array includes a specific element
let includesTwo = numbers.includes(2);

// Slicing an array
let slicedArray = numbers.slice(1, 4);

// Splicing an array (removing and/or adding elements)
let splicedArray = numbers.splice(1, 2, 20, 30);

// Splicing an array (removing elements only)
let removedElements = numbers.splice(1, 2);

// Concatenating arrays
let moreNumbers = [7, 8];
let concatenatedArray = numbers.concat(moreNumbers);

// Joining an array into a string
let joinedString = numbers.join(", ");

// Reversing an array
let reversedArray = numbers.reverse();

// Sorting an array
let sortedArray = numbers.sort((a, b) => a - b);

// Iterating over an array using forEach
numbers.forEach((num) => {
});

// Iterating over an array using for...of
for (let num of numbers) {
}

// Iterating over an array using for...in
for (let index in numbers) {
}

// Iterating over an array using a traditional for loop
for (let i = 0; i < numbers.length; i++) {
}

// Iterating over an array using a while loop
let i = 0;
while (i < numbers.length) {
    i++;
}

// Iterating over an array using a do...while loop
i = 0;
do {
    i++;
} while (i < numbers.length);

// Array destructuring
let [a, b] = [1, 2];

// Mapping an array to create a new array
let doubledArray = numbers.map((num) => num * 2);

// Filtering an array to create a new array
let filteredArray = numbers.filter((num) => num > 2);

// Reducing an array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);

// Finding an element in an array
let foundElement = numbers.find((num) => num > 20);

// Checking if all elements in an array satisfy a condition
let allGreaterThanZero = numbers.every((num) => num > 0);

// Checking if any element in an array satisfies a condition
let anyGreaterThanFive = numbers.some((num) => num > 5);

// Flattening a nested array
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2);

// Finding the index of an element in a nested array
let nestedIndex = nestedArray.findIndex((arr) => Array.isArray(arr) && arr.includes(3));

// Checking if an array is an instance of Array
console.log(Array.isArray(numbers)); // Output: true

// Creating a new array from an iterable object
let iterable = new Set([1, 2, 3]);
let newArrayFromIterable = Array.from(iterable);

// Creating an array with a specific length
let emptyArray = new Array(5);

// Filling an array with a specific value
let filledArray = new Array(5).fill(0);

// Finding the last index of an element in an array
let lastIndex = numbers.lastIndexOf(4);