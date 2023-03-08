import {createWriteStream, createReadStream} from 'fs'

const readable = createReadStream('./8 - Streams/text.txt', {encoding: "utf-8"});
const writable = createWriteStream('./8 - Streams/output2.txt');


writable.on('pipe', (readstream) => {
    console.log('pipe handler called');
})

writable.on('unpipe', (readstream) => {
    console.log('unpipe handler called')
});

writable.on('finish', () => {
    console.log('finish handler called');
})

readable.pipe(writable);