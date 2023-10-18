import playGame2 from '../index.js';
import getRandomNumber from '../rand.js';

const evalGcd = (num1, num2) => {
  let a = num1;
  let b = num2;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }

  return a + b;
};

const createQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 100);
  const num2 = getRandomNumber(0, 100);

  const question = `${num1} ${num2}`;
  const answer = evalGcd(num1, num2).toString();

  return { question, answer };
};

const gameTask = 'Find the greatest common divisor of given numbers.';

export default () => playGame2(gameTask, createQuestionAndAnswer);
