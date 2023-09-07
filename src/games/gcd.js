import defaultGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  return findGcd(secondNumber, firstNumber % secondNumber);
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  let expectedAnswer = 0;
  const question = `${firstNumber} ${secondNumber}`;

  expectedAnswer = findGcd(firstNumber, secondNumber).toString();

  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, getQuestionAndAnswer);
