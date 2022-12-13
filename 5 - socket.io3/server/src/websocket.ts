import { io } from "./httpServer";

interface RoomUser{
    socket_id:string;
    username:string;
    room:string;
}

interface Messages{
    room:string;
    text:string;
    createdAt: Date;
    username: string;
}

const users:RoomUser[] = []
const messages:Messages[] = []



io.on("connection", (client) => {

    client.on("select_room", (data) => {

        client.join(data.language);

        const userInRoom = users.find(user => user.username === data.name && user.room === data.language)
        if(userInRoom) {
            userInRoom.socket_id = client.id
        }else{
            users.push({
                room: data.language,
                username: data.name,
                socket_id: client.id 
            })
        }
    })

    client.on("message", (data) => {
        //salvar a mensagem
        const message = {
            room: data.language,
            username: data.name,
            text: data.text,
            createdAt: new Date()
        }
        messages.push(message)
        console.log(data)

        //enviar para usuarios da sala
        io.to(data.language).emit("receiveMessage", {language: message.room, mensagem: message.text, name: message.username, createdAt: message.createdAt})
    })
})

