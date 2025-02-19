// https://judge.beecrowd.com/pt/problems/view/1001
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const a = Number(lines.shift());
const b = Number(lines.shift());

console.log(`X = ${a + b}`);
