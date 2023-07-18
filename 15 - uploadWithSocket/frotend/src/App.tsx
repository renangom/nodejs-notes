import React, { useState, useEffect } from 'react'
import io, {Socket} from 'socket.io-client';
import './App.css'
import axios from 'axios';

function App() {
  const [image, setImage] = useState<File>();
  const [error, setError] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [socket, setSocket] = useState<Socket>();
  const [message, setMessage] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    const socket = io('http://localhost:3000');
    setSocket(socket);

    socket.on('connect', () => {
      console.log('Conectado ao servidor');
    });

    socket.on('uploadProgress', (progress) => {
      console.log('Progresso do Upload: ', progress)
      const progressNumber = Number(progress);
      setUploadProgress(progressNumber);
    })

    socket.on('endded', () => {
      window.location.reload();
      
    })
  }, [])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3001/images');
        setImages(res.data as File[]);
        console.log(images)
      } catch (error) {
        console.error('Erro ao buscar os arquivos:', error);
      }
    };
  
    fetchData(); // Chama imediatamente a função async
  }, []);

  const handleSelectImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files![0];

    const fileExtension = image.name.substring(image.name.lastIndexOf('.')).toLowerCase();


    if(image.size > 5 * 1024 * 1024) {
      setError(true);
      setMessage('Arquivo maior que 5MB')
    }else if(fileExtension !== ".png" && fileExtension !== ".jpg") {
      setError(true);
      setMessage('Formato do arquivo não suportado');
    }
    else {
      setError(false);
      setImage(image);
    }
  }

  const handleEnviarImagem = () => {
    if(!image) {
      setError(true);
      setMessage("Você tentou enviar um arquivo com formato não suportado")
    }else {
      socket!.emit("upload", image, (status:any) => {
        console.log(status);
      });
    }
    
  }
  return (
    <div>
      <input type='file' accept='image/*' onChange={handleSelectImage} />
      <button onClick={handleEnviarImagem}>Enviar</button>
      {error ? <div>
        <p>{message}</p>
      </div> : null}
      {
        uploadProgress > 0 && (
          <div>
            <p>Progresso do Upload: {uploadProgress}%</p>
            <progress value={uploadProgress} max="100" />
          </div>
        )
      }

      <div>
        {images.map((image) => {
          return(
            <div>
              {image}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
