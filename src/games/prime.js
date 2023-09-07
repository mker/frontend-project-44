import defaultGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrimeNumber = (question) => {
  if (question < 2) return false;
  if (question !== Math.round(question)) return false;

  const squareNum = Math.sqrt(question);

  for (let i = 2; i <= squareNum; i += 1) {
    if (question % i === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandom(1000);
  const expectedAnswer = isPrimeNumber(question) ? 'yes' : 'no';

  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, getQuestionAndAnswer);
