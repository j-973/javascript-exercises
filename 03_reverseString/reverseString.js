const reverseString = function(string) {
    //splits every character of a string into a new array (because empty string "" is the separator parameter)
    //then these single-character arrays have their order reversed
    //finally the join method concatenates these single-character arrays on to every other single-character array, returning a whole, reversed string
    return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
