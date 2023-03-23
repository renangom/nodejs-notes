import {strictEqual, throws} from 'assert'
import {add, asyncFunction} from './functions.js';


//first test
const myBuffer = Buffer.from('Hello World');
const text = myBuffer.toString();

strictEqual(text, 'Hello World');

//second test
throws(() => add('1', 2), Error);

//third test
asyncFunction(true, 'Hello World').then((data) => {
    strictEqual(data, 'Hello World')
});