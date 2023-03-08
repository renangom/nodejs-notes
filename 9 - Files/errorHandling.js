import fs from 'fs';


fs.open('/does-not-exists.txt', 'r', (err,handle) => {
    if(err) throw err;
})