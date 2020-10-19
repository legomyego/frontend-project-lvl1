import promptly from 'promptly';

console.log('Welcome to the Brain Games!');

(async () => {
  const name = await promptly.prompt('May I have your name?');
  console.log(`Hello, ${name}!`);
})();