// 같음을 판단하는 매쳐 두종류가 있다.
test('tobe : 2더하기 2는 4다', () => {
  expect(2 + 2).toBe(4);
});
test('tobe : 2더하기 2는 5가 아니다', () => {
  expect(2 + 2).not.toBe(5);
});

test('toEqual : 2더하기 2는 4다', () => {
  expect(2 + 2).toEqual(4);
});

test('toEqual : 2더하기 2는 1이 아니다', () => {
  expect(2 + 2).not.toEqual(1);
});

// 차이점
test('tobe vs toEqual', () => {
  const arr = [1, 2, 3];
  // 오브젝트가 동일한지 확인한다
  // expect(arr).toBe([1, 2, 3])
  // 내용의 값 체크를 한다
  expect(arr).toEqual([1, 2, 3])
});

test('tobe vs toEqual 2', () => {
  const employee = {
    name: "김승기",
    position: "서울"
  };

  // 오브젝트가 동일한지 확인한다
  // expect(employee).toBe({name: "김승기", position: "서울"})
  // 내용의 값 체크를 한다
  expect(employee).toEqual({name: "김승기", position: "서울"})
});

// 빈값 체크하기
test('null', () => {
  const a = null;

  expect(a).toBeNull();
  expect(a).toBeDefined()
  expect(a).toBeFalsy();

  // expect(a).toBeUndefined();
  // expect(a).toBeTruthy();
});

// 빈값 체크하기
test('undefined', () => {
  const a = undefined;
  // expect(a).toBeNull();
  // expect(a).toBeDefined()
  // expect(a).toBeTruthy();

  expect(a).toBeUndefined();
  expect(a).toBeFalsy();
});

// 숫자 비교 하기
test('2 더하기 2는', () => {
  const value = 2 + 2;
  // value > 3
  expect(value).toBeGreaterThan(3);
  // value >=3.5
  expect(value).toBeGreaterThanOrEqual(3.5);
  // Value < 5
  expect(value).toBeLessThan(5);
  // Value <= 4.5
  expect(value).toBeLessThanOrEqual(4.5);
});

// 숫자 비교 하기
test('Float 비교', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3);
  // float은 정확한 비교가 불가능 하다.
  expect(value).toBeCloseTo(0.3);
});

// 문자열 매칭
test('문자열 포함 되지 않는지 확인', () => {
  expect('This is a pen').not.toMatch(/apple/);
});

test('문자열 포함 되는지 확인 한다', () => {
  expect('동해물과 백두산이').toMatch(/해물/);
});


test('배열 비교', () => {
  // 배열 비교
  const fruit = [
    'Apple',
    'PineApple',
    'WaterMelon',
    'CocoNut'
  ];


  expect(fruit).toContain('Apple');
  expect(fruit).not.toContain('Pen');
});

test('compiling android goes as expected', () => {
  const func = () => {
    throw "exception!!"
  }
  expect(() => func()).toThrow();
  expect(() => func()).toThrow("exception!!");
});
