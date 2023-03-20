const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName = '') => {
  if (employeeName === '') return {};
  return data.employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
};

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
