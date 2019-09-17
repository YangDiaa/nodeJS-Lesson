function circleFun(r){
    function circumfreence(){
        return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return{
        circumfreence:circumfreence,
        area:area
    }
}
module.exports = {
    circleFun:circleFun
}