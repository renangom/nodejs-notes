import express from 'express'
import socket from 'socket.io'
import http from 'http'
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from '../socketTypes';

const PORT = 8080;
const app = express();
const httpServer = http.createServer(app);
app.use(express.static(__dirname + "./../public"))
const io = new socket.Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>().listen(httpServer);

const clients: Array<any> = [];

io.on("connection", (client) => {
    console.log(`Client ${client.id} connected`)
    clients.push(client);

    client.on('disconnect', () => {
        clients.splice(clients.indexOf(client), 1)
        console.log(`Client ${client.id} disconnected`)
    })
})

httpServer.listen(PORT, () => {
    console.log(`Server is listenning to port ${PORT}`)
})