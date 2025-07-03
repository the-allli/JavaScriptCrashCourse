// "this" => is the object that the function is a property of, gives methods access to their object, execute same code for multiple objects
// arrow functions are lexically bound.
// "this" is dynamically scoped

console.log("This");

// gives methods access to their object
var obj = {
  name: "Fareed",
  getName: function () {
    return this.name;
  },

  setName: function () {
    console.log(this.getName() + "!");
  },
};
obj.setName();

// execute same code for multiple objects
// "this" is dynamically scoped
function importantPerson() {
  console.log(this.name + "!");
}

const name = "Muhammad";
const obj1 = {
  name: "Moosa",
  importantPerson,
};
const obj2 = {
  name: "Hadi",
  importantPerson,
};
obj2.importantPerson();

// Dynamic vs Lexical Scope
const x = () => {
  console.log("x", this);
  const y = () => {
    console.log("y", this);
    const z = {
      hi: () => {
        console.log("z", this);
      },
    };
    z.hi();
  };
  y();
};
x();

console.log("this-4 ways");

// new binding this (dynamic scope)
// Constructor Functions (new)
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("ali", 30);
console.log(p1);

// Implicit binding (dynamic scope)
const p2 = {
  name: "ali",
  age: 30,
  hi() {
    console.log("Hello " + this.name);
  },
};
p2.hi();

// Explicit binding (dynamic scope)
const p3 = {
  name: "moosa",
  age: 30,
  hi: function () {
    console.log("Hello " + this.setTimeout);
  }.bind(window),
};
p3.hi();

// arrow functions (lexical scope)
const p4 = {
  name: "tahir",
  age: 30,
  hi: function () {
    var inner = () => {
      console.log("Hi " + this.name);
    };
    return inner();
  },
};
p4.hi();
