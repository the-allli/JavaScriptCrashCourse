/*
Encapsulation is the bundling of data (properties) and methods (functions) that operate on the data into a single unit (object). 
It also involves restricting direct access to some of an object's components, 
meaning internal representation of an object is hidden from the outside.

JavaScript traditionally doesn't have true private members like some other languages (e.g., C++ private, Java private). 
However, there are common conventions and newer features to achieve encapsulation:
a) Closures (Common way)
b) Convention (Underscore Prefix)
c) Private Class Fields (Newer ES2020+)
*/

class BankAccount {
  constructor(initialBalance) {
    this._balance = initialBalance; // Convention for private-like property
  }

  deposit(amount) {
    if (amount > 0) {
      this._balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this._balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this._balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  }

  getBalance() {
    return this._balance;
  }
}

const myAccount = new BankAccount(100);
myAccount.deposit(50); // Output: Deposited 50. New balance: 150
myAccount.withdraw(30); // Output: Withdrew 30. New balance: 120
console.log(myAccount.getBalance()); // Output: 120
// myAccount._balance = 1000; // You CAN do this, but it violates the convention.

////////////////////////////////////////////////////////////////////////////
class Wallet {
  #balance; // Private field

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ${amount}. New balance: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ${amount}. New balance: ${this.#balance}`);
    } else {
      console.log("Invalid withdrawal amount or insufficient funds.");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const myWallet = new Wallet(200);
myWallet.deposit(75); // Output: Deposited 75. New balance: 275
// console.log(myWallet.#balance); // SyntaxError: Private field '#balance' must be declared in an enclosing class
