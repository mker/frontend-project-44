import defaultGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandom(100);
  const expectedAnswer = isEven(question) ? 'yes' : 'no';
  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, getQuestionAndAnswer);
