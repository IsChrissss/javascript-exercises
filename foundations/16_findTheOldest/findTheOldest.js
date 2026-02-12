const findTheOldest = function(people) {
    return people.reduce((oldAge, newAge) => {
        const oldestAge = getAge(oldAge.yearOfBirth, oldAge.yearOfDeath);
        const newestAge = getAge(newAge.yearOfBirth, newAge.yearOfDeath);
        return oldestAge > newestAge ? oldAge : newAge;
    })
};

// Helper function to handle living people (using current year)
const getAge = (birth, death) => {
  if (!death) death = new Date().getFullYear();
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
