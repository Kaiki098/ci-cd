const { sum, subtract } = require('../src/index');

describe('Testes matemáticos', () => {
  test('Soma de 1 + 2 deve ser 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('Subtração de 5 - 3 deve ser 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });
});