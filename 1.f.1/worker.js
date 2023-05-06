self.onmessage = (e) => {
  console.log(new Date().toLocaleTimeString() + '收到主线程的消息: ' + e.data);
  self.postMessage(e.data + '-收到!')
};
