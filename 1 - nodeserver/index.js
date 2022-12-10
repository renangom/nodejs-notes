import {createServer} from 'http'

const server = createServer();
server.listen(8000, () => {
    console.log(`Server is listenning to http://localhost:${server.address().port}`)
})