var fs=require('fs');
var buf = fs.readFileSync(process.argv[2])
var sum=0;
console.log(buf.toString().split('\n').length -1)
