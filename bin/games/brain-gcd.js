import getRandomNumber from '../utils.js';
import runGame from '../../src/index.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const getGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const generateGameData = () => {
  const number1 = getRandomNumber(1, 200);
  const number2 = getRandomNumber(1, 200);
  const question = `${number1} ${number2}`;
  const correctAnswer = getGCD(number1, number2).toString();
  return {
    question,
    correctAnswer,
  };
};

runGame(gameDescription, generateGameData);
