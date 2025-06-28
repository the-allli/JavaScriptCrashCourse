/*
Inheritance is a mechanism where a new class (or object) is created from an existing class (or object). 
The new class (child/subclass) inherits properties and methods from the existing class (parent/superclass), 
promoting code reusability.

ES6 Classes provide a cleaner, more familiar syntax for creating objects and implementing inheritance, 
but under the hood, they still rely on prototypal inheritance.
a) Prototypal Inheritance (Traditional way)
b) ES6 Classes (Syntactic Sugar over Prototypes)
*/

// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

// Child Class
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Call the parent class constructor
    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} barks loudly!`);
  }
}

const myDog2 = new Dog("Max", "Labrador");
myDog2.speak(); // Output: Max makes a sound.
myDog2.bark(); // Output: Max barks loudly!
console.log(myDog2.name); // Output: Max
console.log(myDog2.breed); // Output: Labrador
