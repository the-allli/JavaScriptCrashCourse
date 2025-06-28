/*
JavaScript doesn't have interfaces like Java or C#.
JavaScript also doesn't have true abstract classes.
However, you can simulate them by throwing errors if abstract methods are not implemented by subclasses.
*/

class Shape {
  constructor() {
    if (new.target === Shape) {
      // Prevent direct instantiation of Shape
      throw new Error("Cannot instantiate abstract class Shape directly.");
    }
  }

  // Abstract method - subclasses must implement this
  calculateArea() {
    throw new Error(
      "Method 'calculateArea()' must be implemented by subclasses."
    );
  }

  // Concrete method
  displayInfo() {
    console.log("This is a shape.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

// const myShape = new Shape(); // Throws error: Cannot instantiate abstract class Shape directly.

const myCircle = new Circle(5);
console.log(`Circle Area: ${myCircle.calculateArea()}`); // Output: Circle Area: 78.53981633974483
myCircle.displayInfo(); // Output: This is a shape.

const myRectangle = new Rectangle(4, 6);
console.log(`Rectangle Area: ${myRectangle.calculateArea()}`); // Output: Rectangle Area: 24
