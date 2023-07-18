import { useState } from 'react';
import axios from 'axios';

function App() {
  const [send, setSend] = useState(false);
  const [filesize, setFileSize] = useState('');
  const [extension, setExtension] = useState('');
  const [selectImagem, setSelectImagem] = useState(null);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const handleEnviarImagem = () => {
    if (selectImagem) {
      enviarImagemParaServidor(selectImagem);
    } else {
      setError(true);
      setMessageError('Você não selecionou nenhuma imagem.');
    }
  };

  const enviarImagemParaServidor = async (imagem) => {
    try {
      const formData = new FormData();
      formData.append('imagem', imagem);

      const response = await axios.post('http://localhost:3000/upload', formData, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log('Imagem enviada com sucesso!');
      } else {
        setError(true);
        setMessageError(`Erro ao enviar imagem: ${response.statusText}`);
      }
    } catch (error) {
      setError(true);
      setMessageError(`Erro ao enviar a imagem: ${error.message}`);
    }
  };

  const handleSelecionarImagem = (event) => {
    const imagem = event.target.files[0];
    const fileExtension = imagem.name.substring(imagem.name.lastIndexOf('.')).toLowerCase();

    if (imagem.size > 5 * 1024 * 1024) {
      setError(true);
      setMessageError('Tamanho da imagem excede 5MB.');
      setSelectImagem(null);
    } else if (fileExtension !== '.png') {
      setError(true);
      setMessageError('Arquivo não é uma imagem .png.');
      setSelectImagem(null);
    } else {
      setError(false);
      setSend(true);
      setFileSize(imagem.size);
      setExtension(fileExtension);
      setSelectImagem(imagem);
      console.log(imagem);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleSelecionarImagem} />
      {send && (
        <div>
          <p>Tamanho do arquivo: {(filesize / 1024 / 1024).toFixed(3)} MB</p>
          <p>Extensão do arquivo: {extension}</p>
        </div>
      )}
      <button onClick={handleEnviarImagem}>Enviar</button>
      {error && <p className="ErrorMessage">{messageError}</p>}
    </div>
  );
}

export default App;