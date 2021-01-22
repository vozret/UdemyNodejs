const fs = require('fs');

console.log("Hello from first-app.js")

// writes a file to our hard drive
fs.writeFileSync('hello.txt', 'Hello from Node.js');