const timer = require('../src/timer');

test('비동기 성공 테스트 - 1', () => {
  timer.start(1).then(data => {
    expect(data).toBe("완료");
  })
});
// 또는
test('비동기 성공 테스트 - 2', () => {
  expect(timer.start(1)).resolves.toBe("완료");
});

test('비동기 실패 테스트 - 1 ', () => {
  timer.start(5).catch(e => {
    expect(e).toBe("2초 이상 입력하면 안됩니다.")
  });
});
// 또는
test('비동기 실패 테스트 - 2', () => {
  expect(timer.start(5)).rejects.toBe("2초 이상 입력하면 안됩니다.");
});