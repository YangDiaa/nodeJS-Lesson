const fs = require("fs");
const path = require("path");
console.log("请输入要创建的文件夹：");
//"请输入要创建的文件：","请输入要删除的文件夹："
process.stdin.on("data",function(data){
   var cmd = data.toString();
   var cmdArr = cmd.split(" ");
   console.log(cmdArr[0]);
   switch(cmdArr[0]){
        case "mkdir":
            console.log("111");
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(filePath,"hello node");
            break;
        case "delete":
            var filePath = path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(filePath);
            break;
        default:
            console.log("something err");
            break;
   }        
    
})