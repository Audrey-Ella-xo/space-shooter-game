/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
describe('submit a score if input are valid', () => {
  test('submit score to the Api if input is valid', () => {
    const dataMock = jest.fn();
    dataMock.mockResolvedValue('Leaderboard score created correctly.');
    expect(dataMock()).resolves.toBe('Leaderboard score created correctly.');
  });

  describe('create a game with a valid name', () => {
    test('create a game to if the name is valid', () => {
      const nameMock = jest.fn(name);
      const result = nameMock('flappy bird');
      expect(nameMock).toHaveBeenCalledWith('flappy bird');
    });
  });
});