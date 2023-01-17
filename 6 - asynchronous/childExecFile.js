import {execFile} from 'child_process'

execFile('node', ['test.js'], (err, stdout, stderr) => {
    if(err){
        throw err
    }
    console.log(stdout);
})