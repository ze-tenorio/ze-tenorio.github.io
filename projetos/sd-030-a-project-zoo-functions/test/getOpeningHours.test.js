const getOpeningHours = require('../src/getOpeningHours');

const hours = {
  Tuesday: { open: 8, close: 6 },
  Wednesday: { open: 8, close: 6 },
  Thursday: { open: 10, close: 8 },
  Friday: { open: 10, close: 8 },
  Saturday: { open: 8, close: 10 },
  Sunday: { open: 8, close: 8 },
  Monday: { open: 0, close: 0 },
};

describe('Testes da função getOpeningHours', () => {
  it('ao receber parametros validos que representem horas em que o zoo esta fechado retorna que esta fechado', () => {
    expect(getOpeningHours('Monday', '6:30-AM')).toBe('The zoo is closed');
  });

  it('ao receber parametros validos que representem horas em que o zoo esta aberto retorna que esta aberto', () => {
    expect(getOpeningHours('Tuesday', '5:30-PM')).toBe('The zoo is open');
  });

  it('ao receber parametros validos que representem horas em que o zoo esta fechado retorna que esta fechado', () => {
    expect(getOpeningHours()).toEqual(hours);
  });

  it('ao receber parametro de hora invalido lança um erro', () => {
    expect(() => getOpeningHours('Monday', '6')).toThrow();
  });

  it('ao receber parametro de hora sem a abreviação de AM ou PM lança uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '10:30')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('ao receber parametro de hora maior que 12, lança uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '17:30-AM')).toThrow('The hour must be between 0 and 12');
  });

  it('ao receber parametro de dia inválido lança uma mensagem de erro', () => {
    expect(() => getOpeningHours('Sunonday', '10:30-AM')).toThrow('The day must be valid. Example: Monday');
  });

  it('ao receber parametro de minutos inválido (maior que 59) lança uma mensagem de erro', () => {
    expect(() => getOpeningHours('Monday', '10:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
