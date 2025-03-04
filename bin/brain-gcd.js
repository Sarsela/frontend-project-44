#!/usr/bin/env node
import { welcome, qcdGame } from '../index.js';

console.log('Welcome to the brain-games!');

qcdGame(welcome());
