const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const person = data.employees.find((emp) => emp.id === id);
  const animalId = person.responsibleFor[0];
  const animalList = data.species.find((specie) => specie.id === animalId).residents;
  const sortedAnimalList = animalList.sort((a, b) => b.age - a.age);
  return Object.values(sortedAnimalList[0]);
};

// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
