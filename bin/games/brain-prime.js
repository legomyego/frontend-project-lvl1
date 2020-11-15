import getRandomNumber from '../utils.js';
import runGame from '../../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateGameData = () => {
  const question = getRandomNumber(1, 200);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

runGame(gameDescription, generateGameData);
