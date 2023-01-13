import {readFileSync} from 'fs';

console.log('Operation 1');
const content = readFileSync('input.txt', 'utf-8');
console.log('Content', content);
console.log('Operation 2');
console.log('Operation 3');