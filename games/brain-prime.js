import playGame2 from '../src/index.js';

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createQuestionAndAnswer = () => {
  const question = rand(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame2(gameTask, createQuestionAndAnswer);
