import {open, write, close} from 'fs';
import EventEmitter from 'events';
import { format } from 'util';


class EventLogger extends EventEmitter {
    constructor(file, levels) {
        super();

        this.file = file;
        this.levels = levels;

        //bind method binds a function to a specific object
        this.on('error', this.log.bind(this, 'ERR'));
        this.on('warning', this.log.bind(this,'WARN'));
        this.on('info', this.log.bind(this, 'INFO'));
    }

    log(level, data) {
        if(this.levels.indexOf(level) > -1) {
            open(this.file, 'a', (err, handle) => {
                const buffer = Buffer.from(format('%s (%s) %s\n', new Date(), level, data));
                write(handle, buffer, 0, buffer.length, null, (err, written,buffer) => {
                    close(handle, () => {})
                })
            })
        }
    }
}

const logger = new EventLogger('error.log', ['ERR', 'WARN']);
logger.emit('error', 'Something happened');
logger.emit('warning', 'Something else happened');
logger.emit('info', 'Not relevant');