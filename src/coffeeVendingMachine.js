class coffeeVendingMachine {
  constructor(price, stock) {
    this.price = price;
    this.stock = stock;
  }

  getPrice() {
    return this.price;
  }

  getStock() {
    return this.stock
  }

  buy(count) {
    if(this.stock < count) {
      throw Error("재고가 부족 합니다")
    }
    this._stock -= count;

    return count + "잔 나왔습니다";
  }
}