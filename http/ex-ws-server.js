const express = require('express');
const http = require('http');
const url = require('url');
const WebSocket = require('ws');

const app = express();

app.use(express.static('public'));
    
app.get('/',function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
    const location = url.parse(ws.upgradeReq.url, true);
      // You might use location.query.access_token to authenticate or share sessions
      //   // or ws.upgradeReq.headers.cookie (see http://stackoverflow.com/a/16395220/151312)
      //
      //
      console.log('websocket connection!');
           ws.on('message', function incoming(message) {
               console.log('received: %s', message);
                 });
      
                   ws.send('something');
                   });
     
                   server.listen(8089, function listening() {
                     console.log('Listening on %d', server.address().port);
                     });

