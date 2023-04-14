//tolowercase converts all to the same lower case. the replace function in combination with the regular expression (RegEx) syntax replaces any characters that aren't numbers or letters.
//Multiple words: since spaces are not letters or numbers, they are also replaced by the regex, since they aren't considered for the sake of palindrome checking
//Line 6 uses strict equals to compare if the string is the exact same forwards and after splitting, reversing, and rejoining the string.
const palindromes = function (string) {
    string = string.toLowerCase().replace(/[^0-9a-z]/g, "");
    return (string === string.split("").reverse().join(""));
};

// Do not edit below this line
module.exports = palindromes;
