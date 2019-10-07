var WebSocketServer = require('websocket').server;
var http = require('http')

var server = http.createServer( (res, res) => {
    // process http request. Since we are just writing websockets server
    // we don't have to implement anything.
});
server.listen(1337, () => {});
//  create the server
wsServer = new WebSocketServer({
    httpServer: server
});

connection.on('request', (request) => {
    var connection = resquest.accept(null, resquest.origin);

    /* 
    This is the most important callback for us
    we'll handle all messages from user here
     */

     connection.on('message', (message) => {
         if (message.type === 'utf8') {
            //  process WebSocket message
         }
     });

     connection.on('close', (connection) => {
        //  close user connection
     });

});


