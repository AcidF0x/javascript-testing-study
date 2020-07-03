const coffeeVendingMachine = require("../src/coffeeVendingMachine");

describe('커피 머신 설정 테스트', () => {
  it('커피 머신을 초기화할 수 있다', () => {
    // Given
    const price = 100;
    const stock = 100;

    // When
    const machine = new coffeeVendingMachine(price, stock);

    // Then
    expect(machine).toBeInstanceOf(coffeeVendingMachine);
  });

  it('커피 가격을 설정 확인할 수 있다.', () => {
    // Given
    const price = 100;
    const stock = 500;
    const machine = new coffeeVendingMachine(price, stock);

    // When
    const result = machine.getPrice();

    // Then
    expect(result).toBe(price);
  });

  it('커피 재고를 설정 확인할 수 있다.', () => {
    // Given
    const price = 100;
    const stock = 500;
    const machine = new coffeeVendingMachine(price, stock);

    // When
    const result = machine.getStock();

    // Then
    expect(result).toBe(stock);
  });
});

describe('구매 테스트', () => {
  it('커피를 구매할 수 있다', () => {
    // Given
    const price = 100;
    const stock = 500;
    const machine = new coffeeVendingMachine(price, stock);
    const count = 20;

    // When
    const result = machine.buy(count);

    // Then
    expect(result).toMatch(/잔 나왔습니다/);
  });

  it('커피를 재고보다 많이 구매할 수 없다.', () => {
    // Given
    const price = 100;
    const stock = 500;
    const machine = new coffeeVendingMachine(price, stock);

    // When && Then
    expect(()=> machine.buy(stock + 100)).toThrowError("재고가 부족 합니다");
  })
})