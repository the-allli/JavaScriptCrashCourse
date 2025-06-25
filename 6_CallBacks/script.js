// Function with Callback
function processData(data, callback) {
    const processedData = data.map(item => item * 2);
    callback(processedData);
}
// callback function
function displayData(data) {
    console.log(data);
}
// Using the processData function with a callback
processData([1, 2, 3], displayData);
