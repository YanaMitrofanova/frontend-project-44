import playGame2 from '../index.js';
import getRandomNumber from '../rand.js';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;

  for (let i = 2; i < Math.floor(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const createQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => playGame2(gameTask, createQuestionAndAnswer);
