'use strict';

const io = require('socket.io-client');
const SERVER_URL = process.env.SERVER_URL || 'http://localhost:3000'

const socket = io.connect(`${SERVER_URL}/caps`);

socket.on('pickup', payload => {

  setTimeout(() => {
    socket.emit('in-transit', payload);
  }, 5000);

  setTimeout(() => {
    socket.emit('delivered', payload);
  }, 5000);

});
