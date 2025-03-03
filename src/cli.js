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
