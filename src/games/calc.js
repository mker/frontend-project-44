import { defaultGame, getRandom } from '../index.js';

const gameDescription = 'What is the result of the expression?';

const calcGame = () => {
  const operands = ['+', '-', '*'];
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(10);
  const operatorIndex = getRandom(3);
  const operator = operands[operatorIndex];

  let expectedAnswer = 0;
  const question = `${firstNumber} ${operator} ${secondNumber}`;

  switch (operator) {
    case '+':
      expectedAnswer = firstNumber + secondNumber;
      break;
    case '-':
      expectedAnswer = firstNumber - secondNumber;
      break;
    case '*':
      expectedAnswer = firstNumber * secondNumber;
      break;
    default:
      expectedAnswer = null;
  }
  return [question, expectedAnswer.toString()];
};

export default () => defaultGame(gameDescription, calcGame);
