import {createServer} from 'http'

//the function createServer receives a callback

const server = createServer((request, response) => {
    //first we write the header of the response using lowercase
    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    const body = `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8">
    <title>Node.js Demo </title>
    </head>
    <body>
    <h1 style="color:green">Hello user</h1>
    </body>
    </html>`

    response.end(body);
});
server.listen(8000, () => {
    console.log(`Server is listenning to http://localhost:${server.address().port}`)
})