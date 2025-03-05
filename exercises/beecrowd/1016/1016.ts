// https://judge.beecrowd.com/pt/problems/view/1016
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const km = Number(lines.shift());

console.log(`${km*2} minutos`);