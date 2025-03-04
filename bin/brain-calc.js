#!/usr/bin/env node
import { welcome, calcGame } from '../index.js';

console.log('Welcome to the brain-games!');

calcGame(welcome());
