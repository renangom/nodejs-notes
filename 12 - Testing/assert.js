import {strictEqual, throws, rejects} from 'assert'
import {add, asyncFunction} from './functions.js';


//first test
const myBuffer = Buffer.from('Hello World');
const text = myBuffer.toString();

strictEqual(text, 'Hello World');

//second test
throws(() => add('1', 2), Error);

//third test
const data = await asyncFunction(true, 'Hello World');
strictEqual(data, 'Hello World');

//fourth test
rejects(() => asyncFunction(false, 'Fail'));
