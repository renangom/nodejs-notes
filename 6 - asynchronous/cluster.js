import cluster from 'cluster';
import { createServer } from 'http';

const timeout = 30000;

if(cluster.isPrimary) {
    cluster.setupPrimary({silent: true}); //silent permite que output não seja padrão

    setTimeout(cluster.disconnect, timeout);

    cluster.on('exit', function () {
        console.log(`Workers were terminated after ${timeout}ms`);
    })

    cluster.fork();
    cluster.fork();

    if(cluster.isWorker) {
        console.log(`Worker ${cluster.worker.id} started`);
        createServer((req, res) => {
            console.log(`Worker ${cluster.worker.id} has received a request`);
            res.end(`Worker ${cluster.worker.id} xxx`)
        }).listen('8080');
    }
}