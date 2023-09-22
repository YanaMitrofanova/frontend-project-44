import readlineSync from 'readline-sync';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const isEven = (num) => num % 2 === 0;
const createQuestionAndAnswer = () => {
  const question = rand(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};
const playBrainEven = () => {
  const numOfQuestions = 3;
  const isCorrectAnswer = (userAsnwer, correctAnswer) => userAsnwer === correctAnswer;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${gameTask}`);
  for (let i = 0; i < numOfQuestions; i += 1) {
    const { question, answer } = createQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!isCorrectAnswer(userAnswer, answer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default playBrainEven;
