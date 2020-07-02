const calc = {
  sum: (num1, num2) => num1 + num2,
  sub: (num1, num2) => num1 - num2,
  div(num1, num2) {
    if(num1 <=0 || num2 <= 0) {
      throw "0으로 나눌수 없습니다."
    }
    return num1 / num2;
  }
};


module.exports = calc;