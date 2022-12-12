import {createServer} from 'http'
import path from 'path'
import url from 'url'
import express from 'express'
import cookieSession from 'cookie-session'
import { Server } from 'socket.io'
import router from './app/index2.js'
import initWebSocket from './app/websocket.js';

const app = express();

const server = createServer(app);
server.listen(8080, () => {
    console.log('Server is listenning to port 8080')
})

const io = new Server().listen(server);

const logoutWebsocket = initWebSocket(io);

app.use(
    cookieSession({
        name: 'session',
        keys: ['key1', 'key2']
    })
)

app.use(express.urlencoded({extended: false}))

app.set('views', `${path.dirname(url.fileURLToPath(import.meta.url))}/app/views`);
app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.render('login');
});

app.use(router(logoutWebsocket))