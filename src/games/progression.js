import { defaultGame, getRandomInRange } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => {
  const progLength = getRandomInRange(5, 10);
  const firstNumber = getRandomInRange(1, 100);
  const progStep = getRandomInRange(1, 10);
  const lastIndex = progLength - 1;

  const progression = [];
  let stepNumber = firstNumber;

  for (let i = 0; i < progLength; i += 1) {
    stepNumber += progStep;
    progression.push(stepNumber);
  }
  const hiddenNumberIndex = getRandomInRange(0, lastIndex);
  const hiddenNumber = progression[hiddenNumberIndex];

  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  const expectedAnswer = hiddenNumber.toString();

  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, progressionGame);
