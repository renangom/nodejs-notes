import {Readable} from 'stream'

const readable = new Readable({
    objectMode: true,

    read() {
        this.emiteValue();
    }
});

readable.items = 0;
readable.maxItems = 10;
readable.emiteValue = () => {
    setTimeout(() => {
        if(readable.items++ < readable.maxItems) {
            readable.push(readable.createValue());
        }else {
            readable.push(null);
        }
    }, Math.floor(Math.random() * 5) * 1000);
}

readable.createValue = () => {
    return {
        date: new Date(),
        temp: `${Math.floor(Math.random() * 1000 - 273)} C`
    }
}

readable.on('readable', () => {
    let value;
    while(null != (value = readable.read())){
        console.log(JSON.stringify(value))
    }
});