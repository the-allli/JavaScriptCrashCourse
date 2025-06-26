// First-Class Functions
function executeFunction(fn) {
    fn();
}
executeFunction(() => console.log("Executed!"));
