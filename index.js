const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) => {
    console.log(res,req);

    res.setHeader('content-type', 'text/html');

    let path = './views/';
    console.log(`this is the request url: ${req.url}`);

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break
        case '/contact':
            path += 'contact-me.html';
            res.statusCode = 200;
            break
        default:
            path += '404.html';
            res.statusCode = 404;
            break
    }

    console.log(`this is the path: ${path}`);

    fs.readFile(path, (err,data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.end(data);
        }
    })
})

server.listen(8080, 'localhost', () => {
    console.log('listening for requests on port 8080');
})

