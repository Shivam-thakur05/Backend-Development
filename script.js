 const fs = require('fs');

// Create a file in the backend 
/*
fs.writeFile("myBackendFile.txt", "This is a backend file", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});
*/

// write details into that files
/*
fs.appendFile("myBackendFile.txt", "This is the appended text", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data added successfully");
    }
});
*/


// Read the file
/*
fs.readFile("myBackendFile.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
*/

// Rename the file
/*
fs.rename("myBackendFile.txt", "myBackendFileRenamed.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File renamed successfully");
    }
});
*/

// Delete the file
/*
fs.unlink("myBackendFileRenamed.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File deleted successfully");
    }
});
*/

// Create a folder
/* 
fs.mkdir("myBackendFolder", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder created successfully");
    }
});
*/

// copy a file
/*
fs.copyFile("myBackendFile.txt", "myBackendFolder/myBackendFile.txt", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File copied successfully");
    }
});
*/

// Read the folder
/*
fs.readdir("myBackendFolder", (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});
*/

// Delete the folder
/*
fs.rmdir("myBackendFolder", {recursive: true}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Folder deleted successfully");
    }
});
*/
