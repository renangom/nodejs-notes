import {useState, useEffect} from 'react'
import {io, Socket} from 'socket.io-client'

interface dataProp{
    language: string;
    name: string;
    mensagem:string;
    createdAt:Date;

}

export const Chat = () => {
    const language = localStorage.getItem("language");
    const name = localStorage.getItem("user");
    const socket = io("http://localhost:8080")
    const [messages, setMessages] = useState(Array<dataProp>);

    let text = "";
    socket.emit("select_room", {
        name,
        language
    });

    const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        text = inputValue;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        //socket 
        socket.emit("message", {
            name,
            text,
            language
        })
    }

    socket.on("receiveMessage", (data:dataProp) => {
        setMessages([...messages,data])
    })
    
    console.log(messages)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className="message">
                    Você está na sala de: {language}
                    {messages.map((message) => {
                        return (
                            <div>{message.name}: {message.mensagem} - <b>{}</b></div>
                        )
                    })}
                </div>
                <input type='text' placeholder='Digite sua mensagem' onChange={handleMessage} />
                <button type='submit'> Enviar </button>
            </form>
        </div>
    )
}