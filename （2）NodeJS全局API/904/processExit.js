var arg1=process.argv[2];
if(arg1 == 'e'){
    process.exit();//当前进程退出
}
else if(arg1 == 'k'){
    process.kill(process.pid);
}
else{
    setTimeout(function(){
        console.log("延时执行");
    },5000)
}