var student={};
var s=['Name','E-mail','QQ','Mobile'];
var i=0;
console.log(s[0]+":");
process.stdin.on("data",function(data){
    if(i == 3){
        console.log(student);
        process.exit();
    }
    else{
        student[s[i]]=data.toString('utf8');
        i++;
        console.log(s[i]+":");
    }    
});

