import { WebSocketServer } from "ws";

//esta função cria um novo websocket server
export default function initWebSocket(app){
    //instancia do wss na porta 8181
    const wss = new WebSocketServer({port: 8181});

    const connections = {};

    //ws representa conexão do cliente
    wss.on('connection', (ws) => {
        ws.on('message', (message) => {
            const data = JSON.parse(message);
            let msg;
            
            switch(data.type){
                case 'join':
                    connections[data.name] = ws;
                    msg = JSON.stringify({type:'join', names: Object.keys(connections)})
                    break;
                case 'msg':
                    msg = JSON.stringify({type:'msg', name: data.name, msg: data.msg})
                    break;
            }

            Object.values(connections).forEach((connection) =>{
                connection.send && connection.send(msg);
            })
        })
    })
}