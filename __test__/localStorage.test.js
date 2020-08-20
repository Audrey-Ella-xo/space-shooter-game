const localStorageTest = require('../__mocks__/localStorage.mocks');

describe(' Tests the getting score of 0 from local storage', () => {
  let score;
  test('returning 0 if no scores available in localStorage', () => {
    score = localStorageTest.getCurrentScoreTest();
    expect(score).toBe(0);
  });
});

describe('Tests getting score func from localStorage', () => {
  let score;

  test('get requested stored data in the localStorage', () => {
    localStorageTest.storeScoreTest(390);
    score = localStorageTest.getCurrentScoreTest();
    expect(score).toBe(390);
  });
});

describe('Tests getting valid score from localStorage', () => {
  let score;

  test('return error if stored data in localStorage is invalid', () => {
    localStorageTest.storeScoreTest('390');
    score = localStorageTest.getCurrentScoreTest();
    expect(score).not.toBe(390);
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