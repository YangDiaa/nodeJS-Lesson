const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var streamReader=fs.createReadStream(process.argv[1]);
        streamReader.pipe(res);
    }
    else{
        var filePath=path.join(__dirname,"/"+str);
        if(fs.existsSync(filePath)){
            var streamReader=fs.createReadStream(filePath);
            streamReader.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
            res.end("该文件不存在");
        }
    }
}).listen(8034);