function Bomb(){
    this.message="bomb!!!";
    var that = this;
    Bomb.prototype.explode = function(){
        console.log(that.message);
    }
}
var bomb=new Bomb();
setTimeout(bomb.explode,2000);