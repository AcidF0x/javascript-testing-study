const calc = require('../src/calc.js');

test('더하기 테스트', () => {
  // Given
  const num1 = 1;
  const num2 = 2;

  // When
  const result = calc.sum(num1, num2);

  // Then
  expect(result).toBe(num1 + num2);
})