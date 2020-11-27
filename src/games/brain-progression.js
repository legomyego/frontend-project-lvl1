import getRandomNumber from '../utils.js';
import runGame from '../startGame.js';

const gameDescription = 'What number is missing in the progression?';

const getProgression = (startElement, step, count, missingElement) => {
  const progressionString = [];
  const missedElementMask = '.. ';

  for (let i = 0; i <= count; i += 1) {
    progressionString.push(`${startElement + step * i} `);
  }

  progressionString[missingElement] = missedElementMask;

  return progressionString.join(' ');
};

const generateGameData = () => {
  const progressionStart = getRandomNumber(1, 100);
  const progressionStep = getRandomNumber(1, 10);
  const progressionCount = getRandomNumber(5, 10);
  const progressionMissedElement = getRandomNumber(0, progressionCount - 1);
  const question = getProgression(
    progressionStart,
    progressionStep,
    progressionCount,
    progressionMissedElement,
  );
  const correctAnswer = (progressionStart + progressionStep * progressionMissedElement).toString();

  return {
    question,
    correctAnswer,
  };
};

export default () => runGame(gameDescription, generateGameData);
