var username = process.argv[2];
var password = process.argv[3];
if(username != "undefined" && password != "undefined"){
    var buf1 = Buffer.from(username,"utf-8");
    var buf2 = Buffer.from(password,"utf-8");
    var loginStr = username+";"+password;
    var buf = Buffer.from(loginStr);
    var base64Str = buf.toString("base64");
    console.log("用户名:"+buf1+" 密码:"+buf2);
    console.log("base64加密："+base64Str.toString("base64"));
}
else{
    console.log("用户名或密码不能为空");
}