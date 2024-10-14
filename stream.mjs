import fs from 'fs';

const stream = fs.createWriteStream('log.log');

stream.write("Muhammad\n");
stream.write("Sayuti\n");
stream.write("Akbar\n");

const reader = fs.createReadStream('log.log');
reader.addListener('data', (data) => {
    console.log(data.toString());
})