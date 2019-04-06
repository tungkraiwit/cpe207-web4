// const uuid = require('uuid');
// console.log('Hello my first Node.js app');
// console.log('uuid: ' + uuid.v4());
// console.log('uuid: ' + uuid.v4());
// const {person,Person} = require('./person');
// console.log(person);
// const p1 = new Person('Tung',21);
// console.log(p1);

const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        // res.writeHead(200, { 'content-type': 'text/html' })
        // res.end('<h1>This is index.html</h1>')

        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });

    } else if (req.url === '/contact') {
        // res.writeHead(200, { 'content-type': 'text/html' })
        // res.end('<h2>This is about</h2>')
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    }else if (req.url === '/gallery') {
        // res.writeHead(200, { 'content-type': 'text/html' })
        // res.end('<h2>This is about</h2>')
        fs.readFile(path.join(__dirname, 'public', 'gallery.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(content);
        });
    } else if (req.url === '/css/style.css') {
        fs.readFile(path.join(__dirname, 'public', 'css', 'style.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'content-type': 'text/css' });
            res.end(content);
        });

    } else {
        // res.writeHead(404, { 'content-type': 'text/html' })
        // res.end('<h3>Eror 404: Not Found</h3>')
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'content-type': 'text/html' });
            res.end(content);
        });

    }
});

const PORT = process.env.PORT || 5500;
server.listen(PORT, () => {
    console.log('Server is running on port: ' + PORT);
});