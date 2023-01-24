//pipe method redirects the output of a readable stream to the input of a writable stream
import {createReadStream, createWriteStream} from 'fs'


const read = createReadStream('./text.txt');
const write = createWriteStream('output.txt');

read.pipe(write)