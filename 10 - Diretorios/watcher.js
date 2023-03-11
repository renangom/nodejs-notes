import {watch} from 'fs';


const file = '../error.log';

const watcher = watch('error.log', (event) => {
    console.log(`${file} has been ${event}d`);
    watcher.close();
})