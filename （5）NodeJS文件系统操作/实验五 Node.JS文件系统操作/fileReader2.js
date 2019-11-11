const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){//r+   读写的方式
            var statObj = fs.statSync(process.argv[1]);
            var buf = Buffer.alloc(statObj.size);
            fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buf.toString());
                    fs.closeSync(fd);
                }
            });
        })
    }
    else{
        var filePath = path.join(__dirname,"/"+fileName);
        if(fs.existsSync(filePath)){
            fs.open(filePath,"r+",function(err,fd){//r+   读写的方式
                var statObj = fs.statSync(filePath);
                var buf = Buffer.alloc(statObj.size);
                fs.read(fd,buf,0,statObj.size,0,function(err,by,buff){
                    if(err){
                        console.log(err);
                    }
                    else{
                        res.end(buf.toString());
                        fs.closeSync(fd);
                    }
                });
            })
        }
        else{
            res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
            res.end("该文件不存在");
        }
    }
}).listen(8067)
