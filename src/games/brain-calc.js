import playGame2 from '../index.js';
import getRandomNumber from '../rand.js';

const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let result;

  switch (operator) {
    case ('+'):
      result = num1 + num2;
      break;
    case ('-'):
      result = num1 - num2;
      break;
    case ('*'):
      result = num1 * num2;
      break;
    default:
      result = null;
  }

  return result;
};

const createQuestionAndAnswer = () => {
  const num1 = getRandomNumber(0, 10);
  const num2 = getRandomNumber(0, 10);
  const operator = operators[getRandomNumber(0, operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();

  return { question, answer };
};

const gameTask = 'What is the result of the expression?';

export default () => playGame2(gameTask, createQuestionAndAnswer);
