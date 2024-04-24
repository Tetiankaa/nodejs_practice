const logEvents = require('./logEvents');

const EventEmitter = require("node:events");

const myEmitter = new EventEmitter();

myEmitter.on('log',(msg)=>logEvents(msg));

setTimeout(()=>{
    myEmitter.emit('log','Message from \"log\" emitter!!')
},3000)
