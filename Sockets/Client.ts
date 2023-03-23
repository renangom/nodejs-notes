import {connect} from 'net';

const client = connect('\\\\.\\pipe\\node-pipe', () => {
    console.log('Connection was made')
    let count:number = 0;
    let number:number = 0;
    client.write('Client say hello')
    let interval = setInterval(() => {
        if (count < 100) {
            number = Math.ceil(Math.random() * 100);
            console.log(number);
            let text = number.toString();
            client.write(text);
            count += 1;
        } else {
            clearInterval(interval);
            client.end();
        }
    }, 500);
    client.on('readable', () => {
        console.log('subtotal: ' + client.read().toString());
    })
})
