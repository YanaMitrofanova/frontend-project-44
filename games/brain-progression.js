import playGame2 from '../src/index.js';

const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const progressionSize = 10;

const makeProgression = (start, diff) => {
  const progression = [];

  for (let i = 0; i < progressionSize; i += 1) {
    progression.push(start + diff * i);
  }

  return progression;
};

const createQuestionAndAnswer = () => {
  const start = rand(0, 100);
  const diff = rand(1, 10);
  const progression = makeProgression(start, diff);

  let answer = progression[rand(0, progression.length)];
  progression[progression.indexOf(answer)] = '..';

  const question = progression.join(' ');
  answer = answer.toString();

  return { question, answer };
};

const gameTask = 'What number is missing in the progression?';

export default () => playGame2(gameTask, createQuestionAndAnswer);
