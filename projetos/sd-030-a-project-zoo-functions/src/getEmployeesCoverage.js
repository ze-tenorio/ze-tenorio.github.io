const data = require('../data/zoo_data');

const generateEmployeeCoverage = (employee) => {
  const employeeAnimals = employee.responsibleFor;
  const { id: identification } = employee;
  const fullName = `${employee.firstName} ${employee.lastName}`;
  const species = employeeAnimals.map((ide) => data.species.find((sp) => sp.id === ide).name);
  const locations = employeeAnimals.map((ide) => data.species.find((sp) => sp.id === ide).location);
  return {
    id: identification,
    fullName,
    species,
    locations,
  };
};

const getEmployeesCoverage = (obj = 0) => {
  const { employees } = data;
  if (obj === 0) return employees.map((e) => generateEmployeeCoverage(e));
  const { name = 0, id = 0 } = obj;
  let findEmployee = 'none';
  if (name === 0) findEmployee = employees.find((e) => e.id === id);
  if (id === 0) findEmployee = employees.find((e) => e.firstName === name || e.lastName === name);
  if (findEmployee === undefined) throw new Error('Informações inválidas');
  return generateEmployeeCoverage(findEmployee);
};

module.exports = getEmployeesCoverage;
