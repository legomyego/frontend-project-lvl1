import getRandomNumber from '../utils.js';
import runGame from '../startGame.js';

const gameDescription = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getFormula = (number1, number2, operation) => `${number1} ${operation[0]} ${number2}`;

const getCalculations = (number1, number2, operation) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateGameData = () => {
  const number1 = getRandomNumber(1, 200);
  const number2 = getRandomNumber(1, 200);
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  const question = getFormula(number1, number2, operation);
  const correctAnswer = getCalculations(number1, number2, operation).toString();
  return {
    question,
    correctAnswer,
  };
};

export default () => runGame(gameDescription, generateGameData);
