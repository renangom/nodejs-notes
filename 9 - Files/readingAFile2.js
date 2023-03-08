import {readFile} from 'fs'

const filename = 'config.json';

function configParser(env) {
    return new Promise((resolve, reject) => {
        readFile(filename, 'utf-8', (error, content) => {
            if(error){
                reject(error);
            }else {
                const config = JSON.parse(content);
                if(config.hasOwnProperty(env)){
                    resolve(config[env]);
                }else{
                    reject(`Section ${env} does not exist`)
                }
            }
        })
    })
}

configParser('production').then((config) => {
    console.log('Production: ', config);
}, (err) => console.error(err));

configParser('Java').then((config) => {
    console.log('Java: ', config);
}, (err) => console.error(err));