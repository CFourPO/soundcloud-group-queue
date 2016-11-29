/**
 * Created by Home on 11/20/16.
 */
var server = require('http').createServer();
var chalk = require('chalk');

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
    server.on('error', onError);
    // require('./io').createSocket(server); // Attach the socket seperately, so that the app doesn't intercept the connection.
};

var startServer = function () {

    var PORT = normalizePort(process.env.PORT || '3000');

    server.listen(PORT, function () {
        console.log(chalk.blue('server is listening on port ', chalk.magenta(PORT)));
    });
};

createApplication();
startServer();

module.exports = server;


///// HELPER FUNCTIONS ////////
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen error with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}