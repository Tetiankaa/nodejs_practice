const fs = require("node:fs");

if (!fs.existsSync('./directory')){
    fs.mkdir('./directory',(err)=>{
        if (err) throw err;
        console.log('directory created');
    })
}else {
    console.log('directory already exists');
}

if (fs.existsSync('./directory')){
    fs.rmdir('./directory',(err)=>{
        if (err) throw err;
        console.log('directory removed');
    })
}
