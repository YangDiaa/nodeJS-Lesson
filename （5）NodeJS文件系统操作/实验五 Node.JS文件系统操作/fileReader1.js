const http = require("http");
const fs = require("fs");
const path = require("path");
var fileName = process.argv[2];

http.createServer(function(req,res){
    if(fileName == undefined){
        var str="";
        //fs.readFile()是一个异步方法，执行到该句不会等待文件读取完成，就直接执行后面的语句
        //回调函数是等到文件读取完成之后才执行
        fs.readFile(process.argv[1],function(err,data){
            if(err){
                console.log(err);
            }
            else{
                str=data.toString();
                res.end(str);
            }
        })
    }
    else{
        var filePath=path.join(__dirname,"/"+str);
        if(fs.existsSync(filePath)){
            fs.readFile(filePath,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.writeHead(200,{"Content-type":"text/html;charset=UTF8"})
            res.end("该文件不存在");
        }
    }
}).listen(8068);