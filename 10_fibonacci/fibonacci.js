const fibonacci = function(indexChosen) {

let numberSeries = [0, 1], numFirst = numberSeries[0], numSecond = numberSeries[1], result = null;

if (indexChosen < 0) return "OOPS";

//if there's only 1 number in the sequence, result would be null (no numSecond). 
//The 2nd number in the Fibonnaci sequence is 1, which is equal to numSecond
//Loose equality (==) converts the string input "1" to 1 so the conditional works properly. 
if (indexChosen == 1) return numSecond; 

//indexChosen - 1 to account for the fact that the sequence here starts by computing the second number in the sequence 
for (n = 0; n < indexChosen - 1; n++) {
    result = (numFirst + numSecond); //next number in the sequence is the sum of the 2 previous numbers;
    numFirst = numSecond; //updating numFirst to take into account that the sequence moves, 1 --> 2 (first becomes second)
    numSecond = result; //accordingly numSecond takes on the value of result for a calculation of a new result num in the following loop.
}
    return result;
};

// Do not edit below this line
module.exports = fibonacci;
