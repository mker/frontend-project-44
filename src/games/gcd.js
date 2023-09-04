import { defaultGame, getRandom } from '../index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGcd = (firstNumber, secondNumber) => {
  let remainder = 0;
  let numberA = firstNumber;
  let numberB = secondNumber;
  while (numberA % numberB > 0) {
    remainder = numberA % numberB;
    numberA = numberB;
    numberB = remainder;
  }
  return remainder;
};

const gcdGame = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(10);
  let expectedAnswer = 0;
  const question = `${firstNumber} ${secondNumber}`;

  expectedAnswer = findGcd(firstNumber, secondNumber).toString();

  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, gcdGame);
export { findGcd };
