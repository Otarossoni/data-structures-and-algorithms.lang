// https://judge.beecrowd.com/pt/problems/view/1014
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const distance = Number(lines.shift());
const fuel = Number(lines.shift());

console.log(`${(distance/ fuel).toFixed(3)} km/l`);