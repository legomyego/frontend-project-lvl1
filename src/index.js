import promptly from 'promptly';

const maxRounds = 3;
let correctAnswersCounter = 0;

async function getGreeting() {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
  return name;
}

export default async function runGame(rule, gameData) {
  const name = await getGreeting();
  console.log(rule);

  async function gameProcess() {
    const { question, correctAnswer } = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer:');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCounter += 1;
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet 's try again, ${name}!`);
    }

    if (maxRounds === correctAnswersCounter) {
      return console.log(`Congratulations, ${name}`);
    }

    return gameProcess(name);
  }

  gameProcess(name);
}
