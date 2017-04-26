const PORT = 443;

console.log('connecting to server...');

ws = new WebSocket('wss://YOURDOMAIN.COM:' + PORT);

ws.onconnection = function () {
    console.log('connected to server!')
};

ws.onopen = function () {
    console.log('Server connection opened!');
    ws.send(JSON.stringify({type: "USER_JOINED"}));
};

ws.addEventListener('message', function (event) {
    console.log('Message from server', JSON.parse(event.data));

    switch (JSON.parse(event.data).type) {
        case "HI_FROM_SERVER": {
            console.log('The server said hi with the number: ' +
                JSON.parse(event.data).payload);
            break;
        }

        case "USER_ACKNOWLEDGED": {
            console.log('The server know I\'m here. yay.')
        }

    }
});
