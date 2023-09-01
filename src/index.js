import readlineSync from 'readline-sync';

const getRandom = (max) => Math.floor(Math.random() * max);
const roundCount = 3;

const defaultGame = (gameDescription, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  for (let i = 0; i < roundCount; i += 1) {
    const [question, expectedAnswer] = game();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      return console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${userName}!`
      );
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export { defaultGame, getRandom };
