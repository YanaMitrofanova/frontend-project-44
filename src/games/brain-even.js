import getRandomNumber from '../rand.js';
import playGame2 from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const createQuestionAndAnswer = () => {
  const question = getRandomNumber(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

export default () => playGame2(gameTask, createQuestionAndAnswer);
