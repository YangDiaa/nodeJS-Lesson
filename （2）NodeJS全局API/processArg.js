var arg=process.argv[2];
if(arg == undefined || arg == "-h"){
    console.log("帮助： 命令行需为数学运算式");
}
else{
    console.log(arg+"=%s",eval(arg));
}