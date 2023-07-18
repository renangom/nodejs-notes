import {createWriteStream, createReadStream} from 'fs'

const readStream = createReadStream('./8 - Streams/text.txt', {encoding: "utf-8"});
const writeStream = createWriteStream('./8 - Streams/output.txt');

readStream.on('readable', () => {
    const data = readStream.read();
    if(data) {
        writeStream.write(data + ' Olá');
        writeStream.end(null);
    }
});

readStream.on('close', () => {
    console.log("The stream has been closed")
});

readStream.on('error', (e) => {
    console.error('An error has ocurred: ', e);
})

