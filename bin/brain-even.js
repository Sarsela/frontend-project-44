#!/usr/bin/env node
import { welcome, evenGame } from '../index.js';

console.log('Welcome to the brain-games!');

console.log('Answer "yes" if the number is even, otherwise answer "no".');

evenGame(welcome());
