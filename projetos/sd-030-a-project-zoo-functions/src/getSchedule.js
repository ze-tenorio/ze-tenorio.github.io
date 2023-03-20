const data = require('../data/zoo_data');

const createSchedule = () => {
  const days = Object.keys(data.hours);
  const newObj = {};
  days.forEach((d) => {
    const availableSpecies = data.species.filter((s) => s.availability.some((day) => day === d));
    const officeHour = `Open from ${data.hours[d].open}am until ${data.hours[d].close}pm`;
    const exhibition = availableSpecies.map((specie) => specie.name);
    newObj[d] = { officeHour, exhibition };
    if (d === 'Monday') newObj[d] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  });
  return newObj;
};

const getSchedule = (scheduleTarget) => {
  const fullSchedule = createSchedule();
  if (data.species.some((sp) => sp.name === scheduleTarget)) {
    const rightSpecie = data.species.find((specie) => specie.name === scheduleTarget);
    return rightSpecie.availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const obj = {};
    obj[scheduleTarget] = fullSchedule[scheduleTarget];
    return obj;
  }
  return fullSchedule;
};

// console.log(getSchedule('Monday'));

module.exports = getSchedule;
