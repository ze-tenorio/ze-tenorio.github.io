const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((entrant) => {
    const { age } = entrant;
    if (age < 18) child += 1;
    if (age >= 18 && age < 50) adult += 1;
    if (age >= 50) senior += 1;
  });
  return { child, adult, senior };
};

const calculateEntry = (entrants = null) => {
  if (entrants === null) return 0;
  const { child = 0, adult = 0, senior = 0 } = countEntrants(entrants);
  const price = data.prices;
  return child * price.child + adult * price.adult + senior * price.senior;
};

// console.log(calculateEntry([{ name: 'Lara', age: 5 }, { name: 'Carlos', age: 50 }]));
// console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
