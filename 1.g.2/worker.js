console.log('worker loaded only once!');

self.onconnect = function (e) {
  var port = e.ports[0];
  console.log(e);

  port.postMessage('hello!');

  port.onmessage = function (e) {
    console.log(e);
    port.postMessage(e.data + '-response');
  };
};
