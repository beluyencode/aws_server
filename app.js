var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
var count = 0;

var port = process.env.port || 8000;

app.use(express.static(path.join(__dirname, "build")));

app.get('/*', function (req, res) {
    res.sendFile(path.resolve(__dirname, "build", "index.html"))
})

io.on('connection', (socket) => {
    console.log('new connection made');

    socket.on('login', (data) => {
        if (data == 1) {
            if (count < 100) {
                count += 1;
                socket.emit('sendTicket', count);
                io.sockets.emit('sendPercent', count);
            } else {
                socket.emit('sendTicket', count + 1);
            }
        } else {
            io.sockets.emit('sendPercent', count);
        }
    });
    socket.on('getPercent', (data) => {
        socket.emit('sendPercent', count);
    });

    socket.on('event3', (data) => {
        console.log(data.msg);
        socket.emit('event4', {
            msg: 'Loud and clear :)'
        });
    });

});

server.listen(port, () => {
    console.log("Listening on port " + port);
});