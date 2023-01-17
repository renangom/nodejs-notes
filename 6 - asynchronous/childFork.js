import {fork} from 'child_process';

const child = fork('./childProcess.js');
child.on('message', (message) => {
    console.log(`From child process: ${message}`)
});

child.send('This is parent process')