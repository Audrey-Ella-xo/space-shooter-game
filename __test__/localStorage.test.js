const localStorageTest = require('../__mocks__/localStorage.mocks');

describe(' Tests the getting score in localStorage if return == 0', () => {
  let score;
  test('returning 0 if no coins\' available in localStorage', () => {
    score = localStorageTest.getCurrentScoreTest();
    expect(score).toBe(0);
  });
});

describe('Tests the score retrieval func from localStorage', () => {
  let score;

  test('get requested stored data in the localStorage', () => {
    localStorageTest.storeScoreTest(390);
    score = localStorageTest.getCurrentScoreTest();
    expect(score).toBe(390);
  });
});

describe('Tests the storage of score in the localStorage', () => {
  const score = 50;
  test('Should store the sent in score ', () => {
    localStorageTest.storeScoreTest(score);
    const data = localStorageTest.getCurrentScoreTest();
    expect(data).toEqual(50);
  });
});