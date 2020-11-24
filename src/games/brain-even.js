import getRandomNumber from '../utils.js';
import runGame from '../startGame.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (value) => value % 2 === 0;

const generateGameData = () => {
  const question = getRandomNumber(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    correctAnswer,
  };
};

export default () => runGame(gameDescription, generateGameData);
