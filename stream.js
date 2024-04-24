const fs = require("node:fs");

const readStream = fs.createReadStream('./files/file_1.txt');
const writeStream = fs.createWriteStream('./files/file_2.txt');

readStream.on('data',(dataChunk)=>{
    writeStream.write(dataChunk);
})
