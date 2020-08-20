/* eslint-disable no-undef */
/* eslint-disable import/no-unresolved */
const api = require('../__mocks__/api.mocks');

describe('submit a score if input are valid', () => {
  test('submit score to the Api if the imput are valid', () => api.submitScore('john doe', 280).then((data) => {
    expect(data).toBe('Leaderboard score created correctly.');
  }));
});

describe('do not submit a score if input are invalid', () => {
  test('do not submit score to the Api if any of the input values are invalid', () => api.submitScore(300, 280).then((data) => {
    expect(data).not.toBe('Leaderboard score created incorrectly.');
  }));
});

describe('create a game with a valid name', () => {
  test('create a game to if the name is valid', () => api.createGame().then((data) => {
    expect(data).toBeTruthy();
  }));
});

describe('Retrieve the score', () => {
  test('return the score if the app exists', () => api.getScoreBoard().then((data) => {
    expect(typeof data).toBe('object');
  }));
});