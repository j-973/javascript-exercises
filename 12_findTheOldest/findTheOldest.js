function getPersonAge(yearOfBirth, yearOfDeath) {
    //if there is no death year, set death year to the current year
    if (yearOfDeath === undefined) {
      yearOfDeath = new Date().getFullYear();
    }
    const AGE = (yearOfDeath - yearOfBirth);
    return AGE;
  }

function findTheOldest(arr) {
//the map method creates a new array, with each person having the age property, thanks to the spread operator ...
//the spread operator ... is what copies each original person and adds the age property to each person 
//each person's age is calculated by calling the getPersonAge function with their birth and death years passed to it
//the colon : represents the separation between the property age and the calculated value
const ARR_AGES = arr.map(person => 
    ({...person, age: getPersonAge(person.yearOfBirth, person.yearOfDeath) }))

    //ARR_AGES, which now has each person's age as a property, is sorted in descending order.
        //Given 2 people (personA and personB), the difference in their ages is evaluated
            //if (PersonB > PersonA), personB is older and goes before personA
            //if (personB < personA), personA is older and goes before personB
    const SORTED_AGES = ARR_AGES.sort((personA, personB) => personB.age - personA.age);

    //since ARR_AGES was just sorted in descending order, the first item in that array at index 0 would be the oldest person
    const OLDEST_PERSON = SORTED_AGES[0];
        return OLDEST_PERSON;
}

// Do not edit below this line
module.exports = findTheOldest;