import promptly from 'promptly';
import getRandomNumber from '../utils.js';
import getGreeting from '../../src/index.js';

export default function getDescription() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

const isEven = (value) => value % 2 === 0;

const rounds = 3;
let correctAnswersCounter = 0;

async function gameProcess(name) {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  console.log(`Question: ${question}`);
  const userAnswer = await promptly.prompt('Your answer:');

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswersCounter += 1;
  } else {
    return console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet 's try again, ${name}!`);
  }

  if (rounds === correctAnswersCounter) {
    return console.log(`Congratulations, ${name}`);
  }

  return gameProcess(name);
}

async function runGame() {
  const name = await getGreeting();
  getDescription();
  gameProcess(name);
}

runGame();
