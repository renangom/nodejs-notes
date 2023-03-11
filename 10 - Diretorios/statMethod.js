import {stat} from 'fs/promises'

const statistic = await stat('./README.md');

console.log(`Size of the file is ${statistic.size} Bytes`);