import { Messages } from "./src/websocket";

interface dataRoom{
  name:string;
  language: string;
}

interface dataSendMessage{
  name:string;
  language:string;
  mensagem:string;
  createdAt?: Date
}

interface dataReceiveMessage{
  name:string;
  text: string;
  language:string;
}


export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback?: (e: number) => void) => void;
    receiveMessage: (dados:dataSendMessage) =>  any;
  }
  
export interface ClientToServerEvents {
    hello: () => void;
    select_room: (data:dataRoom, callback:(param:Messages[]) => Messages[]) => void;
    message: (data:dataReceiveMessage) => void;
  }
  
export  interface InterServerEvents {
    ping: () => void;
  }
  
export  interface SocketData {
    name: string;
    age: number;
  }