const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const path = require("path");

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});


io.on('connection', (socket) => {
  console.log("new user connected")

  socket.on('chat message', data => {
     console.log('message: ' + data);
    io.emit('chat message', data);

    //socket.emit("serverEvent") //replay only to this client
    //io.emit("serverEvent") //replay to all clients
    //socket.broadcast.emit("serverEvent") //replay to others clients except this client
   
  });
});

server.listen(7007, () => {
  console.log("http://localhost:7007");
});