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

    socket.emit('newMessage', {
            from: "Admin",
            text: "Welcome to the chat app"
    });

    socket.broadcast.emit('newMessage', {
        from: 'admin',
        text: 'A new user has joined'
    });

    socket.on('createMessage', (message) => {
        console.log('createdMessage', message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().getTime()
        // });
        socket.broadcast.emit('newMessage', {
                from: message.from,
                text: message.text,
                createdAt: new Date().getTime()
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

server.listen(3000, () => {
    console.log('We are live on port 3000');
});
