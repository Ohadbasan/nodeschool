var fs=require('fs')
var path=require('path')

module.exports = function modular(dirname, fileext, callback) {
    fs.readdir(dirname, function (err, list) {
        if (err)
            return callback(err, null)
        var results=[];
        for (var i=0; i<list.length; i++) {
            if ("." + fileext == path.extname(list[i])) {
                results.push(list[i]);
            }
        };
        callback(null, results);
    });
}
