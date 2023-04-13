//2 parameters: arr is the array where values will be removed
// ...values uses rest parameter syntax that takes an indefinite number of values to be removed
// The filter method makes a new array that includes all of the items not specified as those to be removed from the second parameter ...values
const removeFromArray = function(arr, ...values) {
    return arr.filter(item => !values.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
