/*
Before ES6 Classes, JavaScript primarily used prototypal inheritance. 
Every object in JavaScript has a prototype, 
and an object can inherit properties and methods from another object's prototype.
*/

// Parent object/constructor function
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound.`);
};

// Child object/constructor function
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor to inherit properties
  this.breed = breed;
}

// Inherit methods from Animal's prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog; // Set constructor back to Dog

Dog.prototype.bark = function () {
  console.log(`${this.name} barks loudly!`);
};

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.speak(); // Output: Buddy makes a sound. (Inherited from Animal)
myDog.bark(); // Output: Buddy barks loudly!
console.log(myDog.name); // Output: Buddy
console.log(myDog.breed); // Output: Golden Retriever
