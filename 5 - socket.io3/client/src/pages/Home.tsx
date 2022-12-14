import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import "../app.css"


export const Home = () => {
        const navigate = useNavigate();
        const [language, setLanguage] = useState("")
        const [name, setName] = useState("")

        const handleLanguages = (e: React.ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            setLanguage(value);
        }
        
        const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
            e.preventDefault();

            navigate("/chat")
        }

        localStorage.setItem("language", language)
        localStorage.setItem("user", name)
        return (
            <div className="">
            <div className="container">
                <form onSubmit={handleSubmit}>
                <select className="select" name="languages" onChange={handleLanguages}>
                    <option> Selecione a sala</option>
                    <option value="java"> Java </option>
                    <option value="javascript"> JavaScript </option>
                    <option value="php"> PHP </option>
                </select>
                <input type='text' placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)}/>
                <button type="submit"> Entrar </button>
                </form>
            </div>
            </div>
        )
}