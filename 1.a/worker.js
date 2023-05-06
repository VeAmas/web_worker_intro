importScripts('./socket.io.js');

io(
  ''
    .concat('ws', '://')
    .concat('10.20.145.236')
    .concat(8088 ? ':' + 8088 : ''),
  {
    path: '/wss/socket.io',
    transports: ['websocket']
  }
);
