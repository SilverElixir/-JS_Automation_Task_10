// const randomstr = require('randomstring');
import { generate } from 'randomstring'
// const fs = require('fs');
import fs from 'fs';
const filename = 'student.json';
var options = {encoding: 'utf-8', flag: 'r'};

import readfile from './readFileTxt.js';

// import { generate } from 'randomstring';
// import { promises as fs } from 'fs';

let student = {
    name: generate(), // name: randomstr.generate()
    surname: generate(), 
    rate: Math.floor(Math.random() * 101)
}
console.log('Created new student object: \n' + student);

// 1) 
console.log('I. Use JSON.stringify() method to make student a JSON string and write it into file (not existed):')
console.log('student type is ' + (typeof student));
console.log('Then converting student object to JSON...');
const studentJSON = JSON.stringify(student);
console.log('Now student type is ' + (typeof studentJSON));
console.log(studentJSON);
console.log('Finally writing student JSON to file');
fs.writeFileSync(filename, studentJSON, (err) => { 
    if (err) { 
      console.log(err); 
    } 
});
console.log('✅ \n------------------------------------------ \n');

// 2) 
console.log('II. Read previous string from file and convert to object');
let studentObj = {};
fs.readFileSync(filename, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Inside reading file (2): \n' + data);
    studentObj = JSON.parse(data);
});

console.log('Parse JSON from file to object back again');
console.log('studentObj type is ' + (typeof studentObj));

console.log('✅\n ------------------------------------------ \n');
// 3)
console.log('III. Make some change to object and append it as new line to existed file');
studentObj.name = 'Charlotte';
studentObj.surname = 'Riley';

fs.appendFileSync(filename, JSON.stringify(studentObj), (err) => {
    // console.log('Inside appendfile: \n' + studentObj);
    console.log('Inside appendfile: \n');
    if (err) {
      console.log(err);
    }
});

console.log(`Contents of ${filename} file after appending: \n`);
fs.readFileSync(filename, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log('Inside reading file (3): \n' + data);
});

console.log('✅');
console.log('The end');
