// var https = require('https');
 console.log('hellooooooooo');
 var a = 5;
// // var websockServe = https.createServer(options).listen(8080);
// // var websocky = require('ws').Server
// // var ws = new websocky({server: websockServe});
     console.log('connecting to server...');
//     //    console.log('browser socket is: ' + ws);
     ws = new WebSocket('ws://0.0.0.0:8089');
      ws.onconnection = function () {
              console.log('connecting to server still...')
                  };
                      ws.onconnection = function () {
                              console.log('connected to server!')
                                  };
                                     ws.onopen = function () {
                                             console.log('connected to server!')
                   ws.send(JSON.stringify({type: "USER_JOIN"}));
                                                          };
