// https://judge.beecrowd.com/pt/problems/view/1015
import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf8');
const lines = input.split(/\r?\n/);

const line1 = String(lines.shift()).split(' ');
const line2 = String(lines.shift()).split(' ');

const x1 = Number(line1[0])
const y1 = Number(line1[1])
const x2 = Number(line2[0])
const y2 = Number(line2[1])

console.log(Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)).toFixed(4));