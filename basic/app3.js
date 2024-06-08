/* File operation asynchronously */
/* complete this code from below url:
    https://www.youtube.com/watch?v=zylLbugNS_w&list=PL1BztTYDF-QPdTvgsjf8HOwO4ZVl_LhxS&index=7 */


const fs = require('fs');
let text = fs.readFile('./Files/input.txt', 'utf-8', (error1, data1) => {
    console.log(data1);
    
});

console.log("hhhhhhh")
console.log(data1);

let text1 = `Content of the file: ${text} on ${new Date()}`;  

fs.writeFileSync('./Files/output.txt', text1);

console.log("Hi0");
console.log(text);
console.log("Hi1");