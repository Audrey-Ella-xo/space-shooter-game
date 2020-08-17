const localStoreTest = (score) => {
  const answer = JSON.stringify(score);
  localStorage.setItem('score', answer);
};

const getCurrentScoreTest = () => {
  const answer = localStorage.getItem('score');
  let result = JSON.parse(answer);
  if (result === null) {
    result = 0;
    localStoreTest(result);
  }
  return result;
};

const storeScoreTest = (score) => {
  localStoreTest(score);
};

module.exports = {
  localStoreTest,
  getCurrentScoreTest,
  storeScoreTest,
};