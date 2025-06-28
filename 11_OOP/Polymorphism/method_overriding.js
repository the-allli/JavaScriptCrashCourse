/*
A subclass can provide its own implementation of a method that is already defined in its superclass.
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a generic sound.`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    // Overriding the makeSound method
    console.log(`${this.name} meows.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    // Overriding the makeSound method
    console.log(`${this.name} barks.`);
  }
}

const animals = [
  new Animal("Generic Animal"),
  new Cat("Whiskers"),
  new Dog("Fido"),
];

animals.forEach((animal) => {
  animal.makeSound(); // Each object calls its own specific implementation
});
/* Output:
Generic Animal makes a generic sound.
Whiskers meows.
Fido barks.
*/
