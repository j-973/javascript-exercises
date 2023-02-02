//USING ES6 repeat() method
const repeatString = function(string, num) {
   if (num >= 0) { return string.repeat(num); }
    else return 'ERROR';
}

repeatString('', -1);

// Do not edit below this line
module.exports = repeatString;
