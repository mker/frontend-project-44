import defaultGame from '../index.js';
import { getRandomInRange } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';

const createProgression = (startNumber, progLen, step) => {
  const progression = [];
  let stepNumber = startNumber;

  for (let i = 0; i < progLen; i += 1) {
    stepNumber += step;
    progression.push(stepNumber);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progLength = getRandomInRange(5, 10);
  const firstNumber = getRandomInRange(1, 100);
  const progStep = getRandomInRange(1, 10);
  const lastIndex = progLength - 1;

  const progression = createProgression(firstNumber, progLength, progStep);
  const hiddenNumberIndex = getRandomInRange(0, lastIndex);
  const hiddenNumber = progression[hiddenNumberIndex];

  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  const expectedAnswer = hiddenNumber.toString();

  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, getQuestionAndAnswer);
