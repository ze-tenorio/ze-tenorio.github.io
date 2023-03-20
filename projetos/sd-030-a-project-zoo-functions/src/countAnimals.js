const data = require('../data/zoo_data');

const createObject = () => {
  const animalsObj = {};
  data.species.forEach((specie) => {
    animalsObj[specie.name] = specie.residents.length;
  });
  return animalsObj;
};

// console.log(createObject());

const countAnimals = (animal = 'not given') => {
  if (animal === 'not given') return createObject();
  const { species, sex = 'not given' } = animal;
  if (sex === 'not given') return data.species.find((sp) => sp.name === species).residents.length;
  const completeAnimal = data.species.find((sp) => sp.name === species);
  return completeAnimal.residents.filter((r) => r.sex === sex).length;
};

// console.log(countAnimals({ species: 'giraffes' }));

module.exports = countAnimals;
