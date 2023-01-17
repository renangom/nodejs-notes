import { spawn } from 'child_process'

const find = spawn("ls");

find.stdout.on('data', (data) => {
    console.log(data.toString());
})