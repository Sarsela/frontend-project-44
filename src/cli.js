import readlineSync from 'readline-sync';

export const welcome = () => {
  const name = readlineSync.question('May I have your name?');

  console.log(`Hi, ${name}`);
  return name;
};

function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const evenGame = (name) => {
  let correctCount = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (correctCount < 3) {
    const random = randomNum(1, 100);

    console.log(`Question:${random}`);
    const ans = readlineSync.question('Your answer:');
    const correct = random % 2 === 0 ? 'yes' : 'no';
    if (ans === correct) { console.log('Correct!'); correctCount += 1; } else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${correct}.
Let's try again!, ${name})`); break;
    }
    if (correctCount === 3) {
      console.log(`Congratulations! ${name}`);
      break;
    }
  }
};

const calculateCorrect = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const generateRandomExpression = () => {
  const random1 = randomNum(1, 100);
  const random2 = randomNum(1, 100);
  const operators = ['+', '-', '*', '/'];
  const randomOperator = operators[randomNum(0, operators.length - 1)];

  const answer = calculateCorrect(random1, random2, randomOperator);
  return { expression: `${random1} ${randomOperator} ${random2}`, answer };
};

export const calcGame = (name) => {
  let correctCount = 0;
  console.log('What is the result of the expression?');

  while (correctCount < 3) {
    const { expression, answer } = generateRandomExpression();
    console.log(`Question: ${expression}`);
    const ans = parseFloat(readlineSync.question('Your answer:'));

    if (ans === answer) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`${ans} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`);
      break;
    }
  }

  if (correctCount === 3) {
    console.log(`Congratulations! ${name}`);
  }
};
