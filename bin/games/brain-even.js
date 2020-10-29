import promptly from 'promptly';
import getRandomNumber from '../utils.js';

const description = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

async function greeting() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
}

const rounds = 3;
let correctAnswersCounter = 0;

async function gameProcess(name) {
  if (rounds === correctAnswersCounter) {
    return console.log(`Congratulations, ${name}`);
  }

  const randomNumber = getRandomNumber();
  console.log(`Question: ${randomNumber}`);
  const answer = await promptly.prompt('Your answer:');

  if ((answer === 'yes' && randomNumber % 2 === 0) || (answer === 'no' && randomNumber % 2 !== 0)) {
    console.log('Correct!');
  } else {
    return console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
  }

  correctAnswersCounter += 1;
  return gameProcess(name);
}

async function game() {
  const name = await greeting();
  description();
  gameProcess(name);
}

game();
