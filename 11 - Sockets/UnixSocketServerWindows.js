import {createServer} from 'net'


createServer((conn) => {
    conn.on('data', (data) => {
        console.log(data.toString('utf-8'));
    })

    conn.on('end', () => {
        console.log('Connection Endded');
    })

    conn.on('error', () => {
        console.log('Deu erro mané')
    })
    conn.write('Hello Client');
    conn.end();
}).listen('\\\\.\\pipe\\node-pipe', () => {
    console.log('Server is listenning to \\\\.\\pipe\\node-pipe')
});