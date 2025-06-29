/*
Context = It is an object based thing, 
// the value of "this" keyword is a reference to the object that owns that current executing code
// context is determined by how the function is invoked with the value of this keyword
// Each context is linked to its outside context (which gives access to the variables that are in our parent environment) and this outside context depends on where the function sits lexically.
Scope = It is a function based thing, 
// it tells us about what is in the variable environment, 
// visibility of the variables.
*/
"use strict";
// var x = 'x';
// function printName() {
//   console.log(x);
//   var c = "c";
//   return "Ahamd Fareed";
// }
// function findName() {
//   var b = "b";
//   return printName();
// }
// function sayMyName() {
//   var a = "a";
//   return findName();
// }
// sayMyName();

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      console.log(a);
      console.log(b);
      console.log(c);
      console.log("Ahamd Fareed");
    };
  };
}
sayMyName()()();

// Leakage of global variables
function weird() {
  height = 40;
  console.log(height);
}
weird();

// Function Scope (var)
if(5>4){
  var pswd = '12345'
}
console.log(pswd);

// Block Scope (let, const)
if(5>4){
  let pwd = '12345'
  // const pwd = '12345'
}
console.log(pwd);

//
function loop(){
  for (var index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log('final',index);
}
loop();
//
function loop1(){
  for (let index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log('final',index);
}
loop1();

