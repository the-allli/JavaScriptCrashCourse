/*
Polymorphism means "many forms." In OOP, it refers to the ability of objects of different classes to be treated as objects of a common type. 
This is often achieved through inheritance and method overriding.
Polymorphism is naturally supported in JavaScript due to its dynamic nature and prototypal inheritance.
*/

function describeVehicle(vehicle) {
  // We don't care about the exact type, just that it has a 'start' and 'stop' method
  vehicle.start();
  vehicle.stop();
  console.log("---");
}

class Car {
  start() {
    console.log("Car engine starting.");
  }
  stop() {
    console.log("Car engine stopping.");
  }
}

class Bicycle {
  start() {
    console.log("Bicycle starts pedaling.");
  }
  stop() {
    console.log("Bicycle stops.");
  }
}

class Boat {
  start() {
    console.log("Boat propeller spinning.");
  }
  stop() {
    console.log("Boat engine shutting down.");
  }
}

const myCar = new Car();
const myBicycle = new Bicycle();
const myBoat = new Boat();

describeVehicle(myCar);
describeVehicle(myBicycle);
describeVehicle(myBoat);
