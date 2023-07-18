import express from 'express'
import { createWriteStream, readdir, writeFile } from 'fs';
import http from 'http'
import {Server} from 'socket.io';
import cors from 'cors'
import path from 'path';


const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const uploadDir = path.join(__dirname, 'upload')
const io = new Server(server, {
    cors: {origin: "http://localhost:5173"}
});


io.on("connection", (socket) => {
    socket.on("upload", (file, callback) => {
        socket.emit('uploadProgress', 0);
        const stream = createWriteStream(`./upload/imagem-${Date.now()}.png`);
        stream.write(file)
        stream.end();
        stream.on('finish', () => {
            socket.emit('uploadProgress', 100);
            callback({message: "success"})
            socket.emit('endded')
        });
        stream.on("error", (error) => {
            callback({ message: "failure", error });
        });
    })
});

app.get('/images', (req,res) => {
    readdir(uploadDir, (err, files) => {
        if(err) {
            res.status(500).json({message: "Erro ao ler diretório de uploads"})
        }
        const images = files.filter((file) => {
            const extname = path.extname(file);
            return ['.png', '.jpg'].includes(extname);
        })

        res.json(images);
    })
})

app.listen(3001, () => {
    console.log('App is listenning to port 3001');
})

server.listen(3000, () => {
    console.log('server listenning')
})