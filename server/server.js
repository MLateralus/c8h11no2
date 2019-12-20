// Externals
const srv = require('./options');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const port = srv.conf.port;
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false,
}));
const server = require('http').createServer(app);
const io = socketIO(server);

var timeInMss = 

io.on('connection', (socket) => {
    socket.on('Bart', (message) => {
        // Poszukaj Bartka, 
        // Znajdź Bartka
        // Odpowiedz Bartek to MC
        var result = `message: Bartek to jest ziooom`;
        io.emit('BartekResponse', result);
    });

    socket.on('Photo', (data) => {
        fs.writeFile(`./img/${Date.now()}.png`, Buffer(data, 'base64'), err => {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    });
});

server.listen(port, () => {
    console.log('info', `c8h11no2 up on: ${port}`);
});