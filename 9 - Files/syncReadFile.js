import {readFileSync} from 'fs';

//read a file sync is a blocking operation, for a larger file it will block other requests
try{
    const data = readFileSync('./input.txt', 'utf-8');
    console.log(data);
}catch(err){
    console.log(err)
}