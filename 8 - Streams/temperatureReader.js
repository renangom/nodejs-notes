import { Readable } from "stream";

class TemperatureReader extends Readable{
    constructor(opt = {objectMode: true}) {
        super(opt);
        this.items = 0;
        this.maxItems = 10;
    }

    _read() {
        this.emitValue();
    }

    emitValue() {
        setTimeout(() => {
            if(this.items++ < this.maxItems) {
                this.push(this.createValue());
            }else{
                this.push(null);
            }
        }, Math.floor(Math.random() * 5) * 1000)
    }

    createValue() {
        return {
            date: new Date(),
            temp: `${Math.floor(Math.random() * 1000 - 273)} C`
        }
    }
}

const tr = new TemperatureReader();
tr.on('readable', function() {
    let value;
    while (null !== (value = tr.read())){
        console.log(JSON.stringify(value))
    }
})
tr.on('end', () => {
    console.log('Reader has ended');
})