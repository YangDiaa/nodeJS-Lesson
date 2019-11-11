const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
const querystring = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    var ext = pathName.match(/(\.[^.]+|)$/)[0];//后缀名
    if(ext =='.jpg'){
        var filePath = path.join(__dirname,req.url)
        var fileContent = fs.readFileSync(filePath);
        res.writeHead(200, {"Content-Type":{".jpg":"image/jpg",}[ext]
        });
        res.end(fileContent);
    }
    if(pathName == '/'){
        if(req.method == "GET"){
            showLogin(res);
        }
        else if(req.method == "POST"){
            loginIn(req,res);
        }  
    } 
    else if(pathName == "/list"){
        showList(req,res);
    }
    
}).listen(8081);

function showLogin(res){
    var filePath = path.join(__dirname,"login.html");
    var fileContent = fs.readFileSync(filePath);
    res.writeHead(200,{"content-type":"text/html"});
    res.end(fileContent);
}

function loginIn(req,res){
    var formData = '';
    req.on("data",function(chunk){
        formData += chunk;
    })
    req.on("end",function(){
        var formObj = querystring.parse(formData);
        if(formObj.username=='admin' && formObj.pwd=='admin'){
            res.setHeader("Set-Cookie","username=admin&&pwd=admin;max-age=60"); 
            res.end("success");    
        }
        else{
            res.end("err");
        }
    })
}
function showList(req,res){
    var cookie = req.headers["cookie"];
    if(cookie == "username=admin&&pwd=admin"){
        var filePath = path.join(__dirname,"list.html");
        var fileContent = fs.readFileSync(filePath);
        res.writeHead(200,{"content-type":"text/html"});
        res.end(fileContent);
    }
}

