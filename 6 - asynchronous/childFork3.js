import { fork } from 'child_process';

if(process.argv[2] && process.argv[2] === 'child') {
    process.on('message', (data) => {
        console.log('in child process: ', data);
    })
    process.send('ready');
}else {
    const child = fork(process.argv[1], ['child']);

    child.on('message', (data) => {
        if(data === 'ready') {
            for(let i = 0; i < 10; i++){
                child.send(i);
            }
            process.disconnect();
        }
    })
}