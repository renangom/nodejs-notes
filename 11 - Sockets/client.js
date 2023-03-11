import {connect} from 'net';

const client = connect('\\\\.\\pipe\\node-pipe', () => {
    console.log('connected to the server');
    client.write('Hello Server');
})