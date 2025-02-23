// https://judge.beecrowd.com/pt/problems/view/1006
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const a = Number(lines.shift());
const b = Number(lines.shift());
const c = Number(lines.shift());

const result = (a*2+b*3+c*5)/10

console.log(`MEDIA = ${result.toFixed(1)}`);