#!/usr/bin/env node

import getRandomNumber from '../utils.js';
import runGame from '../../src/index.js';

const gameDescription = 'What number is missing in the progression?';

const generateGameData = () => {
  const progressionStart = getRandomNumber(1, 100);
  const progressionCount = getRandomNumber(5, 10);
  const progressionStep = getRandomNumber(1, 10);
  const missedElement = getRandomNumber(0, progressionCount - 1);
  let question = '';
  const correctAnswer = (progressionStart + progressionStep * missedElement).toString();

  for (let i = 0; i <= progressionCount; i += 1) {
    if (i === missedElement) {
      question += '..';
    } else {
      question += ` ${progressionStart + progressionStep * i} `;
    }
  }

  return {
    question,
    correctAnswer,
  };
};

runGame(gameDescription, generateGameData);
