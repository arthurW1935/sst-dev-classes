const fs = require('fs');

function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing to file ${filePath}:, err`);
    } else {
      console.log(`Successfully wrote to file ${filePath}`);
    }
  });
}

function appendFile(filePath, content) {
    fs.appendFile(filePath, content, (err) => {
        if (err) {
        console.error(`Error appending to file ${filePath}:`, err);
        } else {
        console.log(`Successfully appended to file ${filePath}`);
        }
    });
}

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading from file ${filePath}:`, err);
    } else {
      console.log(`Content of file ${filePath}:\n`, data);
    }
  });
}

const filePath = 'example.txt';
const content = 'Hello, world!';

writeFile(filePath, content);
readFile(filePath);
appendFile(filePath, 'This is a new line.');