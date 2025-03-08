// https://judge.beecrowd.com/pt/problems/view/1017
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const time = Number(lines.shift());
const speed = Number(lines.shift());

console.log(((time*speed)/12.0).toFixed(3));