importScripts('https://cdn.bootcdn.net/ajax/libs/mathjs/11.8.0/math.min.js');

self.onmessage = (e) => {
  var matrix = math.matrix(JSON.parse(e.data));
  console.log(math.multiply(matrix, matrix));
};
