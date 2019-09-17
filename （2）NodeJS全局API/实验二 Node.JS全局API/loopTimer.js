var timeId=setInterval(function loop(){
        console.log("I will loop forever!");
    },500);
    //组织延迟执行或者定时执行，回调函数执行
timeId.unref();
timeId.ref();
setTimeout(function(){
    clearInterval(timeId);
    console.log("Game over");
    process.exit();
},5000)


