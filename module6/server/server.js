const http     = require('http');
const path     = require('path');
const express  = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');

let app    = express();
let server = http.createServer(app);
let io     = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected');
    })
});

server.listen(8080, () => {
    console.log('We are live on port 8080');
});
