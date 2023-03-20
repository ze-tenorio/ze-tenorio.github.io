const data = require('../data/zoo_data');

const getAnimalMap = (options = 'ungiven') => {
  const { includesName, sorted, sex } = options;
  const locations = ['NE', 'NW', 'SE', 'SW'];
  const newObj = {};
  locations.forEach((loc) => {
    newObj[loc] = data.species.filter((sp) => sp.location === loc).map((s) => s.name);
  });
  return newObj;
};

console.log(getAnimalMap());

module.exports = getAnimalMap;
