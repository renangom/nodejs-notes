import {appendFile} from 'fs';
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
            const logData = format('%s (%s) %s\n', new Date(), level, data);
            appendFile(this.file, logData, {}, () => {});
        }
    }
}

const logger = new EventLogger('./error.log', ['ERR', 'WARN']);
logger.emit('error', 'Something happened');
logger.emit('warning', 'Something else happened');
logger.emit('info', 'Not relevant');