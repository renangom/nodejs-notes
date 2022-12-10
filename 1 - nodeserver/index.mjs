import {createServer} from 'http'

//the function createServer receives a callback

const server = createServer((request, response) => {
    //first we write the header of the response using lowercase
    response.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
    response.write("Hello");
    response.end(" World \n")
});
server.listen(8000, () => {
    console.log(`Server is listenning to http://localhost:${server.address().port}`)
})