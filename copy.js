let fs = require('fs');
let file = '1.mp4';

fs.stat(file, (err, stat) => {
    let total = stat.size;
    let progress = 0;
    let read = fs.createReadStream(file);
    let write = fs.createWriteStream('result.mp4');
    read.on('data', (chunk) => {
        progress += chunk.length;
        console.log("J'ai lu " + Math.round(100* progress / total) + "%")
    });

    read.pipe(write);
    write.on('finish', () => {
        console.log('Le fichier a bien été copié')
    })

});
