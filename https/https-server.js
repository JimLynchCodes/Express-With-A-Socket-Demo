const fs = require('fs');
const url = require('url');
const https = require('https');
const WebSocket = require('ws');
const express = require('express');

const app = express();
const PORT = 443;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/YOURDOMAIN.COM/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/YOURDOMAIN.COM/fullchain.pem')
};

const server = https.createServer(options, app);
const wss = new WebSocket.Server({server: server});

wss.on('connection', function connection(ws) {
    const location = url.parse(ws.upgradeReq.url, true);
    console.log('websocket connection!');
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });


    ws.on('message', function incoming(message) {
        console.log('received: %s', message);

        switch (JSON.parse(message).type) {
            case "USER_JOINED": {
                console.log('server sees that a client joined.');
                ws.send(JSON.stringify({type: "HI_FROM_SERVER", payload: "42"}));
            }

            case "HI_FROM_CLIENT": {
                console.log('server sees that the client said hi.');
                ws.send(JSON.stringify({type: "USER_ACKNOWLEDGED"}));
            }
        }

    });

});

server.listen(PORT, function () {
    console.log('Listening on %d', server.address().port);
});