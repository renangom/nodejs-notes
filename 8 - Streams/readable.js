import {createReadStream} from 'fs'


const options = {
    encoding: "utf8",
};

const readStream = createReadStream('./text.txt', options);

readStream.on('readable', () => {
    const data = readStream.read();
    if(data) {
        console.log(data);
    }
})

readStream.on("close", () => {
    console.log("The stream has been closed")
})

readStream.on('error', (e) => {
    console.error('An error has ocurred: ', e);
})