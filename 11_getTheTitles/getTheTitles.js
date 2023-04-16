//in this case, the .map function gets the title of each book from the inputted books array, and makes a new array of those titles, called bookTitles
const getTheTitles = function(arr) {
    const bookTitles = arr.map(book => book.title);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
