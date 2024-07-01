const fs = require('fs');

function makeDir(dirPath) {
  fs.mkdir(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error creating directory ${dirPath}:`, err);
    } else {
      console.log(`Successfully created directory ${dirPath}`);
    }
  });
}

function removeDir(dirPath) {
  fs.rm(dirPath, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error removing directory ${dirPath}:`, err);
    } else {
      console.log(`Successfully removed directory ${dirPath}`);
    }
  });
}

const dirPath = 'example-dir';

makeDir(dirPath);
// removeDir(dirPath);