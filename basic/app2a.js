const fs = require('fs');

// Read a file asynchronously
fs.readFile('./Files/input.txt', 'utf8', (err, data) => {//put the wrong file path and see how error is handled
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});