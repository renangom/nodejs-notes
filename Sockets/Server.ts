import {createServer} from 'net'

const server = createServer((conn) => {
    let sum:number = 0;
    let count = 0;
    let buffer;
    let numero = 0;

    conn.on('readable', () => {
            sum += parseInt(conn.read(),10); 
            console.log(sum);
            count += 1;
            if(count >= 10) {
                count = 0;
                conn.write(sum.toString());
            }
    });
});

server.listen('\\\\.\\pipe\\node-pipe', () => {
    console.log('Server listenning on \\\\.\\pipe\\node-pipe');
})