const timer = {
  start(sec) {
    return new Promise((resolve, reject) => {
      if(sec > 2) {
        reject("2초 이상 입력하면 안됩니다.");
      }
      setTimeout(() => {
        resolve("완료");
      }, sec * 1000);
    })
  }
};

module.exports = timer;
