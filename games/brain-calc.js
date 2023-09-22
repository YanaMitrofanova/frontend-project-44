import playGame2 from '../src/index.js';

const operators = ['+', '-', '*'];
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

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
  const num1 = rand(0, 10);
  const num2 = rand(0, 10);
  const operator = operators[rand(0, operators.length)];

  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator).toString();

  return { question, answer };
};

const gameTask = 'What is the result of the expression?';

export default () => playGame2(gameTask, createQuestionAndAnswer);
