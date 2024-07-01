const fs = require('fs');


function writeFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content);
        console.log(`Successfully wrote to file ${filePath}`);
    } catch (err) {
        console.error(`Error writing to file ${filePath}:`, err);
    }
}

function appendFile(filePath, content) {
    try {
        fs.appendFileSync(filePath, content);
        console.log(`Successfully appended to file ${filePath}`);
    } catch (err) {
        console.error(`Error appending to file ${filePath}:`, err);
    }
}

function readFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    console.log(`Content of file ${filePath}:\n`, data);
  } catch (err) {
    console.error(`Error reading from file ${filePath}:`, err);
  }
}

const filePath = 'example.txt';
const content = 'Hello, world!';

writeFile(filePath, content);
readFile(filePath);
appendFile(filePath, 'This is a new line.');
readFile(filePath);
