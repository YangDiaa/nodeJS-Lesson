const http = require("http");
var data = require("./data.json");
http.createServer(function(req,res){
    var strData = "";
    req.on("data",function(chunk){
        strData += chunk;
    })
    req.on("end",function(){
        var str = strData.split("&");
        var username = str[0].split("=")[1];
        var pwd = str[1].split("=")[1];
        var tag = "true";
        for(var i = 0;i<data.length;i++){
            if(username == data[i].username && pwd == data[i].password){
                tag = "true";
                break;
            }
            else{
                tag = "false";
            }
        }
        if(tag == "true"){
            console.log("登录成功");
        }
        else{
            console.log("用户名、密码不正确");
        }
        
    })
}).listen(8086)