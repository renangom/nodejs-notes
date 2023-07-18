import fs from 'fs';


export default function countLines(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            resolve(data.split('\n').length);
        })
    })
}