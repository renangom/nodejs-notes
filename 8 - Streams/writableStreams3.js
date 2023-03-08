import { createWriteStream } from 'fs';
const writeStream = createWriteStream('./8 - Streams/output2.txt');

writeStream.write('Hello\n');
writeStream.cork();
writeStream.write('World\n');

setTimeout(() => {
    writeStream.uncork();
    writeStream.write('!');
    writeStream.end();
}, 5000);