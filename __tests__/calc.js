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

describe('계산기 테스트', () => {
  it('덧셈을 할 수 있다', () => {
    // Given
    const num1 = 1;
    const num2 = 2;

    // When
    const result = calc.sum(num1, num2);

    // Then
    expect(result).toBe(num1 + num2);
  });

  describe('나눗셈 테스트', () => {
    it('나눗셈을 할 수 있다', () => {
      // Given
      const num1 = 4;
      const num2 = 2;

      // When
      const result = calc.div(num1, num2);

      // Then
      expect(result).toEqual(num1 / num2);
    })
    it('0으로 나눌수 없다', () => {
      // Given
      const number = 100;

      // When && Then
      expect(() => {calc.div(number, 0)}).toThrow('0으로 나눌수 없습니다.');
      expect(() => {calc.div(0, number)}).toThrow('0으로 나눌수 없습니다.');

      /**
       * expect(calc.div(0, number)).toThrow('0으로 나눌수 없습니다.');
       * 위 코드는 예외를 Jest가 잡을수 없다.
       */
    })
  });
});