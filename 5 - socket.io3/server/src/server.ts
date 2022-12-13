import { server } from "./httpServer"
import "./websocket"

server.listen(8080, () => {
    console.log('Server is running on port 8080')
})