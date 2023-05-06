importScripts(
  'https://cdn.bootcdn.net/ajax/libs/blueimp-md5/2.19.0/js/md5.min.js'
);

self.onmessage = (e) => {
  let i = 0;
  let ret = '';
  while (i++ < 10000) {
    ret = md5(e.data + ret);
  }
  self.postMessage(ret);
};
