
const pino = require('pino');

//We're using Pino to reduce resources for logging
//Below, is how we're currently setting up our logger ie:Time format, and What to ignore.
//Whenever we need to log from now on pull from utils directory.
const logger = pino({
    transport: {
        target: 'pino-pretty',
        options: {
            translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
            ignore: 'pid,hostname'
        }
    }

});


export default logger;