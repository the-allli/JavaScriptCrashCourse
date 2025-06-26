// Function with generator
function* numberGenerator() {
    let num = 1;
    while (true) {
        yield num++;
    }
}
