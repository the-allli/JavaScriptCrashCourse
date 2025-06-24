// All about Objects in JavaScript

// Creating an object using object literal syntax
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    },
};

// Constructor
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
}
const salva = new Person("Salva");
salva.introduceSelf();
const frankie = new Person("Frankie");
frankie.introduceSelf();

// Accessing properties
console.log(person.name); // Output: Alice
console.log(person["age"]); // Output: 30

// Modifying properties
person.age = 31;
console.log(person.age); // Output: 31

// Adding new properties
person.city = "New York";
console.log(person.city); // Output: New York

// Deleting a property
delete person.isStudent;
console.log(person.isStudent); // Output: undefined

// Calling a method
person.greet(); // Output: Hello, my name is Alice

// Checking if a property exists
console.log("name" in person); // Output: true
console.log("isStudent" in person); // Output: false

// Iterating over properties using for...in
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Object.keys() to get an array of property names
let keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']

// Object.values() to get an array of property values
let values = Object.values(person);
console.log(values); // Output: ['Alice', 31, 'New York']

// Object.entries() to get an array of key-value pairs
let entries = Object.entries(person);
console.log(entries); // Output: [['name', 'Alice'], ['age', 31], ['city', 'New York']]

// Cloning an object using Object.assign()
let clonedPerson = Object.assign({}, person);
console.log(clonedPerson); // Output: { name: 'Alice', age: 31, city: 'New York' }

// Merging objects using Object.assign()
let additionalInfo = { country: "USA", occupation: "Engineer" };
let mergedPerson = Object.assign({}, person, additionalInfo);
console.log(mergedPerson); // Output: { name: 'Alice', age: 31, city: 'New York', country: 'USA', occupation: 'Engineer' }

// Using the spread operator to clone an object
let spreadClonedPerson = { ...person };
console.log(spreadClonedPerson); // Output: { name: 'Alice', age: 31, city: 'New York' }

// Using the spread operator to merge objects
let spreadMergedPerson = { ...person, ...additionalInfo };
console.log(spreadMergedPerson); // Output: { name: 'Alice', age: 31, city: 'New York', country: 'USA', occupation: 'Engineer' }

// Checking if an object is empty
let isEmpty = Object.keys(person).length === 0;
console.log(isEmpty); // Output: false (since person has properties)

// Creating an object with dynamic keys
let dynamicKey = "hobby";
let dynamicPerson = {
    name: "Bob",
    [dynamicKey]: "Reading"
};
console.log(dynamicPerson); // Output: { name: 'Bob', hobby: 'Reading' }

// Using computed property names
let propName = "age";
let computedPerson = {
    name: "Charlie",
    [propName]: 25
};
console.log(computedPerson); // Output: { name: 'Charlie', age: 25 }

// Nested objects
let student = {
    name: "David",
    details: {
        age: 22,
        major: "Computer Science"
    }
};
console.log(student.details.age); // Output: 22

// Object destructuring
let { name, age } = person;
console.log(name, age); // Output: Alice 31

// Object destructuring with default values
let { city = "Unknown" } = person;
console.log(city); // Output: New York

// Object destructuring with renaming
let { name: fullName, age: years } = person;
console.log(fullName, years); // Output: Alice 31

// Using Object.freeze() to make an object immutable
let frozenPerson = Object.freeze({ name: "Eve", age: 28 });
frozenPerson.age = 29; // This will not change the age property
console.log(frozenPerson.age); // Output: 28

// Using Object.seal() to prevent adding new properties but allow modification of existing ones
let sealedPerson = Object.seal({ name: "Frank", age: 26 });
sealedPerson.age = 27; // This will work
sealedPerson.city = "Los Angeles"; // This will not work
console.log(sealedPerson); // Output: { name: 'Frank', age: 27 }    

