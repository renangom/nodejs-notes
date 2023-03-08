import {constants} from 'fs';
import {stat, access} from 'fs/promises';

try{
    const fileStat = await stat('./input.txt');
    console.log(fileStat);
}catch(err){
    console.log(err);
}

// F.OK -> se o arquivo é visível para o processo
// R.OK -> se o arquivo pode ser lido
// W.OK -> se o arquivo pode ser escrito
// X.OK -> se o arquivo pode ser executado
try{
    await access('./input.txt', constants.R_OK);
    console.log('File is readable');
}catch(err){
    console.log(err)
}