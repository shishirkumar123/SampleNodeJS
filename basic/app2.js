/* File operation synchronously */
const readline = require('readline');
const fs = require('fs');
let text = fs.readFileSync('./Files/input.txt', 'utf-8');

let text1 = `Content of the file: ${text} on ${new Date()}`;  

fs.writeFileSync('./Files/output.txt', text1);

console.log(text);
console.log("Hello")
