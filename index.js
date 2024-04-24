const fsPromise = require('node:fs/promises');
const path = require('node:path');

// fs.readFile(path.join(process.cwd(),'./files/lorem.txt'),'utf-8',(err, data)=>{
//     if (err) throw err;
//     console.log(data)
// });
//
// fs.writeFile(path.join(__dirname,'files','reply.txt'),"Nice to meet you!", (err)=>{
//     if (err) throw err;
//     console.log("Write complete");
// })

const fileOps = async () => {
  try {
      const data = await fsPromise.readFile(path.join(__dirname,'files','start.txt'),'utf-8');

      await fsPromise.unlink(path.join(__dirname,'files','start.txt'));
      await fsPromise.writeFile(path.join(__dirname,'files','newFile.txt'),data);
      await fsPromise.appendFile(path.join(__dirname,'files','newFile.txt'),'\n DATA...');
      await fsPromise.rename(path.join(__dirname,'files','newFile.txt'),path.join(__dirname,'files','file_1.txt'));
      const data2 = await fsPromise.readFile(path.join(__dirname,'files','file_1.txt'));
      console.log(`data2: ${data2}`)
  }catch (e) {
      console.error(e.message);
  }
}

void fileOps();


process.on('uncaughtException',(error)=>{
    console.error(`There was an uncaught error: ${error.message}`);
    process.exit(1);
})
