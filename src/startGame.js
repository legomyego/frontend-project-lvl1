import promptly from 'promptly';

let gameRounds = 3;

export async function getGreeting() {
  console.log('Welcome to the Brain Games!');
  const userName = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${userName}!`);
  return userName;
}

export default async function runGame(rule, getGameData) {
  const userName = await getGreeting();
  console.log(rule);

  async function launchGameRounds() {
    const { question, correctAnswer } = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = await promptly.prompt('Your answer:');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      gameRounds -= 1;
    } else {
      return console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet 's try again, ${userName}!`);
    }

    if (!gameRounds) {
      return console.log(`Congratulations, ${userName}`);
    }

    return launchGameRounds(userName);
  }

  launchGameRounds(userName);
}
