import fs from 'fs';
import readline from 'readline';

const filename = 'input.txt';

const data = fs.createReadStream(filename);
const r1 = readline.createInterface({
    input: data
});
let contador = 1;
//reading the file 
r1.on('line', (row) => {
    console.log(`This is the row number ${contador} : ${row}`);
    contador += 1;
})