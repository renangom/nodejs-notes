import {createWriteStream, write} from 'fs'


const writeStream = createWriteStream('./8 - Streams/output3.txt');

const data = 'Node.js is great';

let i = 10000;

function write1() {
    let ok = true;
    do {
        i -= 1;
        if(i === 0) {
            writeStream.end(data);
        }else {
            ok = writeStream.write(data);
        }
    }while( i > 0 && ok);

    if (i > 0) {
        console.log('wait');
        writeStream.once("drain", write)
    }
}

write1();