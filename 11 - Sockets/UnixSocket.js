import {createServer} from 'net';

const server = createServer((connection) => {
    connection.on('data', (data) => {
        console.log(connection.read().toString());
    })

    connection.on('end', () => {
        console.log('Connection Endded');
    })

    connection.on('error', () => {
        console.log('Deu erro mané')
    })
});

server.listen('/tmp/nodejs.sock', () => {
    console.log('Server is listenning on /tmp/nodejs.sock');
})