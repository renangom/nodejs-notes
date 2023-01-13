import {readFile} from 'fs';

console.log('Operation 1');
readFile('input.txt', 'utf-8', (err, data) => {
    console.log('Content', data);
});
console.log('Operation 2');
console.log('Operation 3');