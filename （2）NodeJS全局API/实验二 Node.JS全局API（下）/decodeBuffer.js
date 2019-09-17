var base64Str = "emhhbmdzYW46MTIzNDU2";
var str = Buffer.from(base64Str,"base64");
var buf1 = str.slice(0,8);
var buf2 = str.slice(9,15);
console.log("用户名:"+buf1.toString("utf8")+" 密码:"+buf2.toString("utf8"));

