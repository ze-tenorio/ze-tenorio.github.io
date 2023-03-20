const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const chosenAnimal = data.species.filter((sp) => sp.name === animal);
  return chosenAnimal[0].residents.every((r) => r.age >= age);
};

// console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
