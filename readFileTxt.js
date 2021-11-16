// const fs = require('fs');
import fs from 'fs';

export default async function readfile(filename){
    await fs.readFile(filename, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Inside reading file (): \n' + data);
})};

// module.exports = { readfile };