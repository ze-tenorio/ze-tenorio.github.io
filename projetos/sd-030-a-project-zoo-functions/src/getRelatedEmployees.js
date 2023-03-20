const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((e) => e.managers.some((m) => m === id));

const getRelatedEmployees = (managerId) => {
  const isTrue = isManager(managerId);
  const errorMessage = 'O id inserido não é de uma pessoa colaboradora gerente!';
  if (isTrue === false) throw new Error(errorMessage);
  const filteredEmps = data.employees.filter((e) => e.managers.some((m) => m === managerId));
  return filteredEmps.map((e) => `${e.firstName} ${e.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
