import getRandomNumber from '../utils.js';
import runGame from '../startGame.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let checkNumber = 2; checkNumber < number; checkNumber += 1) {
    if (number % checkNumber === 0) {
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

export default () => runGame(gameDescription, generateGameData);
