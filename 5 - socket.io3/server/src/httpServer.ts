import express from 'express'
import http from 'http'
import socket from 'socket.io'
import cors from 'cors'
import { ClientToServerEvents, InterServerEvents, ServerToClientEvents, SocketData } from '../socketTypes';

const app = express();
//usando o cors
const allowedOrigins = ['http://127.0.0.1:5173']
const options: cors.CorsOptions = {
    origin: allowedOrigins
}
app.use(cors(options))

const server = http.createServer(app)

const io = new socket.Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>({
    cors:{
        origin:'http://127.0.0.1:5173',
        methods: ["GET", "POST"]
    }
}).listen(server)

export {server, io}