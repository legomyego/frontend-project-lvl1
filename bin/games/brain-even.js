import '../../src/index.js';
import promptly from 'promptly';

const getRandomNumber = () => Math.floor(Math.random() * 101);
let correctAnswersCounter = 0;

(async () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (correctAnswersCounter < 3) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);

    // eslint-disable-next-line no-await-in-loop
    const answer = await promptly.prompt('Your answer:');

    if (answer === 'yes' && randomNumber % 2 === 0) {
      console.log('Correct!');
      correctAnswersCounter += 1;
    } else if (answer === 'no' && randomNumber % 2 !== 0) {
      console.log('Correct!');
      correctAnswersCounter += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.`);
      break;
    }
  }
})();
