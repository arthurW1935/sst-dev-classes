
const fs = require('fs');

function moveFile(oldPath, newPath) {
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
        console.error(`Error moving file from ${oldPath} to ${newPath}:`, err);
        } else {
        console.log(`Successfully moved file from ${oldPath} to ${newPath}`);
        }
    });
}

function copyFile(oldPath, newPath) {
    fs.copyFile(oldPath, newPath, (err) => {
        if (err) {
        console.error(`Error copying file from ${oldPath} to ${newPath}:`, err);
        } else {
        console.log(`Successfully copied file from ${oldPath} to ${newPath}`);
        }
    });
}

const oldPath = 'example.txt';
const newPath = 'example-dir/example.txt';
moveFile(oldPath, newPath);
copyFile(newPath, oldPath);