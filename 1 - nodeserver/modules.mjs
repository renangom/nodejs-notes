import path from "path";
import url from 'url'
import fs from 'fs'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(__dirname + " dirname");
console.log(__filename + " filename");


fs.readFile('input.txt', (err,data) => {
    console.log(data); //buffer
    console.log(data.toString()) //dado
})


//encoding a text
const textEncoder = new TextEncoder();
const encodedString = textEncoder.encode('Hello World');
console.log(encodedString);

const textDecoder = new TextDecoder();
const dedocedString = textDecoder.decode(encodedString);
console.log(dedocedString);

const urls = new URL('/dist/latest-v16.x/docs/api/', 'https://nodejs.org')
console.log(urls.href)

const searchParams = new URLSearchParams();
searchParams.set('name', 'john')
searchParams.set('age', 42)
console.log(searchParams)