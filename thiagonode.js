var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Thiago viel denadai 20/09/2023!');
}).listen(8012);
