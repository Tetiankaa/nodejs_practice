const {format} = require("date-fns");
const {v4: uuid} = require("uuid");
const fs = require("node:fs/promises");
const path = require("node:path");

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'))

const logEvents = async (message) =>{
    const dateTime = `${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);

    try {
        await fs.appendFile(path.join(process.cwd(),'eventLog.txt'),logItem);
    }catch (e) {
        console.error(e.message);
    }
}

module.exports = logEvents;
