importScripts('./canny.js')

self.onmessage = (e) => {
  var data = JSON.parse(e.data);
  var canny = CannyJS.canny(
    data.rawData,
    data.width,
    data.height,
    100,
    50,
    1.4,
    3
  );
  self.postMessage(JSON.stringify(canny.drawOn()));
};
