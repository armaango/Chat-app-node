const socketIO = require('socket.io');
const path = require('path');
const http = require('http');
const express = require('express');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection',(socket)=>{
    console.log('New User connected');

    socket.emit('newMessage',{
        from:'ammy',
        text:'heyy',
        createdAt:1233232
    });

socket.on('disconnect',()=>{
    console.log('Client disconnected');
});

socket.on('createMessage', (newMessage)=>{
    console.log('createMessage',newMessage);
});

});

server.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})