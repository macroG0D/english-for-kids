export const initStorage = function () {
  const englishForKidsScores = localStorage.getItem('englishForKidsScores');
  if (englishForKidsScores) {
    return;
  } // else store data
  localStorage.setItem('englishForKidsScores', JSON.stringify({}));
};

// return true if current word in Storage and false if not
const isWordExistInLS = function (currentWord) {
  let englishForKidsScores = localStorage.getItem('englishForKidsScores');
  englishForKidsScores = JSON.parse(englishForKidsScores);
  if (englishForKidsScores[currentWord]) {
    return true;
  }
  return false;
};

const storeScores = function (englishForKidsScores) {
  localStorage.setItem('englishForKidsScores', JSON.stringify(englishForKidsScores));
};

const updateWordScore = function (mode, currentWord) {
  let englishForKidsScores = localStorage.getItem('englishForKidsScores');
  englishForKidsScores = JSON.parse(englishForKidsScores);
  // mode can be trained / correct / incorrect
  if (mode === 'trained') {
    englishForKidsScores[currentWord][0] += 1;
  } else if (mode === 'correct') {
    englishForKidsScores[currentWord][1] += 1;
  } else if (mode === 'incorrect') {
    englishForKidsScores[currentWord][2] += 1;
  }
  // update % procent % if game mode
  if (mode === 'correct' || mode === 'incorrect') {
    const correct = englishForKidsScores[currentWord][1];
    const incorrect = englishForKidsScores[currentWord][2];
    const total = correct + incorrect;
    // % correct
    let correctPercent = (correct * 100) / total;
    correctPercent = correctPercent.toFixed(2);
    englishForKidsScores[currentWord][3] = correctPercent;
    // % incorrect
    let wrongPercent = (incorrect * 100) / total;
    wrongPercent = wrongPercent.toFixed(2);
    englishForKidsScores[currentWord][4] = wrongPercent;
  }

  storeScores(englishForKidsScores);
};

const updateScore = function (mode, currentWord) {
  initStorage();
  let englishForKidsScores = localStorage.getItem('englishForKidsScores');
  englishForKidsScores = JSON.parse(englishForKidsScores);
  if (!isWordExistInLS(currentWord)) {
    // if scores not exist set word's score to default
    englishForKidsScores[currentWord] = [0, 0, 0, '0.00', '0.00'];
    storeScores(englishForKidsScores);
  }
  // update word's score — increment needed value
  updateWordScore(mode, currentWord);
};

export default updateScore;

export const getScores = function (word) {
  let englishForKidsScores = localStorage.getItem('englishForKidsScores');
  englishForKidsScores = JSON.parse(englishForKidsScores);
  return isWordExistInLS(word) ? englishForKidsScores[word] : ['0', '0', '0', '', '0.00'];
};
