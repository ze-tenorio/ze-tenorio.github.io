const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('ao nao passar parametros retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  it('ao passar parametro diferente de string retorna mensagem de parametro invalido', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });

  it('ao passar chave existente retorna o valor referente a chave', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  it('ao passar parametro count retorna quantidade de elefantes no zoo', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  it('ao passar parametro names retorna array de nomes', () => {
    const names = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(handlerElephants('names')).toEqual(names);
  });

  it('ao passar parametro averageAge retorna 10.5', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  it('ao passar string que nao corresponde a uma chave ou keyword valida retorna null', () => {
    expect(handlerElephants('barabam')).toBe(null);
  });
});
