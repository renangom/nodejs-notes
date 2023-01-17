import {exec} from 'child_process';

const cmd = 'ls';

exec(cmd, (err, stdout, stderr) => {
    if(err) {
        throw err;
    }

    console.log(stdout);
})