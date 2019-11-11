var Radio =require("./radio.js");
var radio=new Radio("music radio","FM 106.7");
radio.on("play",function(){ 
    console.log(this.name+" "+this.fm+" opened");
    setTimeout(function(){
        console.log("lalala...");
    },2000)
})