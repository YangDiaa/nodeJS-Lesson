var Dog = require("./dog.js");
var dog1=new Dog("taidi",4);
var dog2=new Dog("zangao",8);
function barkFun(){
    console.log(this.name+" barked!"+" energy："+this.energy);
}
dog1.on("bark",barkFun);
dog2.on("bark",barkFun)
var interVal=setInterval(function() {
    if(dog1.energy >= 0){
        dog1.emit("bark");
        if(dog1.energy > 0){
            dog2.emit("bark");
        }
    }
    else{
        clearInterval(interVal);
    }
    dog1.energy = dog1.energy - 1;
    dog2.energy = dog2.energy - 1;
}, 1000);

