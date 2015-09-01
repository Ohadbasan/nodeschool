var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

http.get(url1, function(request) {
  var result = "";
  request.setEncoding("utf8");
  request.on("data", function(data) {
    result += data;
  });
  request.on("end", function() {
    console.log(result);
    http.get(url2, function(request) {
      var result = ""
      request.setEncoding('utf8')
      request.on("data", function(data) {
        result+=data;
      })
      request.on("end", function() {
        console.log(result);
        http.get(url3, function(request) {
          var result="";
          request.setEncoding("utf8");
          request.on("data", function(data) {
            result+=data;
          })
          request.on('end', function() {
            console.log(result);
          })
        })
      })
    })
  });
});
