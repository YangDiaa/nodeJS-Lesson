const http = require("http");
const fs=require("fs");
const path = require("path");
var server = http.createServer(function(req,res){
    var htmlPath=path.join(__dirname,"\\views\\view.html");
    var htmlContent=fs.readFileSync(htmlPath);
    htmlContent=htmlContent.toString("utf8");
    console.log(htmlPath);
    res.writeHead(200,{"content-Type":"text/html"});
    res.write(htmlContent);
    res.end();  
});
server.listen(8080);