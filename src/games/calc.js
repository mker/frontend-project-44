import defaultGame from '../index.js';
import getRandom from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const operands = ['+', '-', '*'];

const calculate = (number1, operand, number2) => {
  let answer = 0;
  switch (operand) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
      answer = null;
  }
  return answer;
};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(10);
  const operatorIndex = getRandom(3);
  const operator = operands[operatorIndex];

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const expectedAnswer = calculate(firstNumber, operator, secondNumber);

  return [question, expectedAnswer.toString()];
};

export default () => defaultGame(gameDescription, getQuestionAndAnswer);
