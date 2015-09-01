var http = require('http');
var map = require('through2-map')
var url = require('url');

var server = http.createServer(function (req, res) {
  req.setEncoding('utf8');
  req_data = url.parse(req.url, true);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  d = new Date(req_data.query['iso']);
  if (req_data.pathname == '/api/parsetime') {
    res.write(JSON.stringify({hour:d.getHours(),minute:d.getMinutes(), second:d.getSeconds()}));
  }
  if (req_data.pathname == '/api/unixtime') {
    res.write(JSON.stringify({unixtime:d.getTime()}));learn 
  }
  res.end();
})
server.listen(process.argv[2]);
