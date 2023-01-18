import {readFile} from 'fs'

function promiseReadFile(filename) {
    return new Promise((resolve, reject) => {
        readFile(filename, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            }else{
                resolve(data);
            }
        });
    });
}

promiseReadFile('input.txt')
.then((data) => {
    console.log('Content of file: ', data);
})
.catch((error) => {
    console.error('An error occured: ', error.message)
})