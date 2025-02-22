// https://judge.beecrowd.com/pt/problems/view/1005
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const a = Number(lines.shift());
const b = Number(lines.shift());

const result = (a*3.5+b*7.5)/11

console.log(`MEDIA = ${result.toFixed(5)}`);