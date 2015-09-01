var http = require('http');

var url = process.argv[2];

http.get(url, function(request) {
  var result = "";
  request.setEncoding("utf8");
  request.on("data", function(data) {
    console.log(data)
    result += data;
  });
  request.on("end", function() {
    console.log(result.length);
    console.log(result);
  });
});
