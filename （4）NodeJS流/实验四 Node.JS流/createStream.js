const stream = require("stream");

function MyReadable (){
    stream.Readable.call(this);
    this.emit("print")
}
MyReadable.prototype.__proto__=stream.Readable.prototype;
var reader=new MyReadable();
reader.on("print",function(){
    reader.push("a");
    reader.push("b");
    reader.push("null");
    reader.pipe(process.stdout);
})
console.log(process.stdout);

