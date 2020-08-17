const storeScore = (score) => {
  const stringScore = JSON.stringify(score);
  localStorage.setItem('score', stringScore);
};

const getCurrentScore = () => {
  const value = localStorage.getItem('score');
  let result = JSON.parse(value);
  if (result === null) {
    result = 0;
    storeScore(result);
  }
  return result;
};

export {
  storeScore, getCurrentScore,
};