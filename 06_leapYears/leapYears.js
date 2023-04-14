//if year is divisible by 4 (modulus equals 0 for remainder) and is also not evently divisible by 100 (modulus does not equal 0)
//or, as the exception to that rule, if year is evenly divisble by 400, then it's a leap year. Otherwise, it's not a leap year.  

const leapYears = function(year) {
if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    return true;
} else return false;
}
// Do not edit below this line
module.exports = leapYears;
