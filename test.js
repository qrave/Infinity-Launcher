const request = require('request');
const fs = require('fs');
var url = "http://www.swginfinity.com/updates/infinity_00.tre";
var file = fs.createWriteStream("C:\\SWGTest\\relics_1.tre");
request(url).on('error', err => {
    process.send("download error " + err);
    file.close();
    fs.unlink(dest);
    if (cb) cb(err.message);
})
.on('close', e=>console.log('done'))
.pipe(file);
