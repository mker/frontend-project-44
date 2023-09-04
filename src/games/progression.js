import { defaultGame, getRandomInRange } from '../index.js';

const gameDescription = 'What number is missing in the progression?';

const progressionGame = () => {
  const progLength = getRandomInRange(5, 10);
  const firstNumber = getRandomInRange(1, 100);
  const progStep = getRandomInRange(1, 10);
  const lastNumber = progLength - 1;

  const progression = [];
  let stepNumber = firstNumber;

  for (let i = 0; i < progLength; i += 1) {
    stepNumber += progStep;
    progression.push(stepNumber);
  }
  const hiddenElementIndex = getRandomInRange(0, lastNumber);

  const question = progression.toSpliced(hiddenElementIndex, 1, '..');
  const expectedAnswer = progression[hiddenElementIndex].toString();

  return [question, expectedAnswer];
};

export default () => defaultGame(gameDescription, progressionGame);
