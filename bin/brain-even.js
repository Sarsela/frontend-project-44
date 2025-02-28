#!/usr/bin/env node
import readlineSync from 'readline-sync';

function randomNum(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}
/* const random = randomNum(1, 100) */
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function quest() {
  const random = randomNum(1, 100);
  console.log(`Question:${random}`);
  return random;
}

quest();
function ask() {
  const ans = readlineSync.question('Your answer:');
  const random = randomNum(1, 100);
  let result = '';
  if (ans === 'no' && random % 2 === 1) { result = 'Correct!'; } else if (ans === 'yes' && random % 2 !== 1) {
    result = 'Correct!';
  } else if (ans === 'no' && random % 2 !== 1) { result = '\'no\' is wrong answer; (.Correct answer was \'yes\'.'; } else { result = '\'yes\' is wrong answer; (.Correct answer was \'no\'.'; }
  console.log(result);
  const playAgain = true;
  let correctCount = 0;

  while (playAgain) {
    const quest = quest();
    const isCorrect = ask(quest);

    if (isCorrect) {
      correctCount++;
      if (correctCount === 3) {
        console.log('Congratulations! You have answered correctly three times in a row!');
        break;
      }
    } else {
      correctCount = 0;
    }
  }
}
ask();
