import playGame2 from '../index.js';
import getRandomNumber from '../rand.js';

const progressionSize = 10;

const makeProgression = (start, diff) => {
  const progression = [];

  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
};

const createQuestionAndAnswer = () => {
  const start = getRandomNumber(0, 100);
  const diff = getRandomNumber(1, 10);
  const progression = makeProgression(start, diff);

  let answer = progression[getRandomNumber(0, progression.length)];
  progression[progression.indexOf(answer)] = '..';

  const question = progression.join(' ');
  answer = answer.toString();

  return { question, answer };
};

const gameTask = 'What number is missing in the progression?';

export default () => playGame2(gameTask, createQuestionAndAnswer);
