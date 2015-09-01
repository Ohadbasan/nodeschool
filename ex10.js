var net = require('net')
var server = net.createServer(function (socket) {
  var d = new Date();
  month = d.getMonth() + 1
  leadingzero = "0" + month
  datestring = d.getFullYear() + "-" + leadingzero + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes()
  socket.end(datestring)
})
server.listen(process.argv[2])
