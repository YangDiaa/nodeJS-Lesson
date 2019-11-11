const util = require("util");
const events =require("events");
const EventEmitter= events.EventEmitter;


function Radio(name,fm){
    this.name=name;
    this.fm=fm;
    this.emit("play");
    this.emit("stop");
}
util.inherhits(Radio,EventEmitter);
