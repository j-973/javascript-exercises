const sumAll = function(rangeStart, rangeEnd) {
    if (typeof rangeStart === "string" || typeof rangeEnd === "string") {
        return "ERROR";
    }

    //returning ERROR if either input is not a number, or if either input is negative. 
    //Since Number() converts strings into numbers, the previous conditional returns an error if either parameter is a string
    if (!Number(rangeStart) || !Number(rangeEnd)|| rangeStart < 0 || rangeEnd < 0) {
        return "ERROR";
    }    

    //swaps rangeStart and rangeEnd if rangeStart is bigger than rangeEnd
    if (rangeStart > rangeEnd) {
        let biggerNum = rangeStart;
        rangeStart = rangeEnd;
        rangeEnd = biggerNum;
    }
    
    //since i starts at the start of the range, and ends when i is less than or EQUAL TO rangeEnd, the totalSum is inclusive of both rangeStart and rangeEnd
    let i = rangeStart,
            totalSum = 0;

    while (i <= rangeEnd) {
        totalSum += i;
        i++;
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
