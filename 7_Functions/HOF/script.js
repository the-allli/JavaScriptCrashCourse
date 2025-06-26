// Higher-Order Functions
function higherOrder(fn) {
    return function () {
        fn();
    };
    }
    let newFunction = higherOrder(() => console.log("Higher-Order Function"));
    newFunction();
    