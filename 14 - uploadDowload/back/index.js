import express from 'express';
import fs from 'fs'
import cors from 'cors'
import multer from 'multer';
import path from 'path'

const app = express();
app.use(express.json());
app.use(cors());

//configuração multer
const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, './images')
    },
    filename: (req,file,cb) => {
        const ext = path.extname(file.originalname);
        cb(null, 'imagem-' + Date.now() + ext);
    }
});

const upload = multer({storage});

app.post('/upload', upload.single('imagem'), (req, res) => {
    res.status(200).json({message: "Imagem recebida e salva"})
})


app.listen(3000, () => {
    console.log('App is listenning to port 3000');
})