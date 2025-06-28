/*
Using closures is a very common way to achieve private-like members in JavaScript. 
Variables declared within a function are not accessible from outside that function.
*/

function Counter() {
  let count = 0; // This is 'private' due to closure

  this.increment = function () {
    count++;
    console.log(`Count: ${count}`);
  };

  this.decrement = function () {
    count--;
    console.log(`Count: ${count}`);
  };

  this.getCount = function () {
    return count;
  };
}

const myCounter = new Counter();
myCounter.increment(); // Output: Count: 1
myCounter.increment(); // Output: Count: 2
console.log(myCounter.getCount()); // Output: 2
// console.log(myCounter.count); // Undefined - cannot directly access 'count'
