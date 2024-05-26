const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

rl.question("Please enter your name:", (name) => {
    console.log("Hello " + name);
    rl.close(); //if you miss this line program wont terminate
});

rl.on('close', () => {
    console.log("haha");
    process.exit(0);
});