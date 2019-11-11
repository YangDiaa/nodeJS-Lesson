const path = require("path");
const fs = require("fs");

var writePath = path.join(__dirname,"/to.txt");
var filePath = path.join(__dirname,"/from.txt");
var readStream = fs.createReadStream(filePath);
var writeStream = fs.createWriteStream(writePath);
readStream.pipe(writeStream);