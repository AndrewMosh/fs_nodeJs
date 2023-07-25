const fs = require("fs");

fs.stat("read.js", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`File size: ${stats.size} bytes`);
  console.log(`Last modified: ${stats.mtime}`);
  console.log(`Is a file: ${stats.isFile()}`);
  console.log(`Is a directory: ${stats.isDirectory()}`);
  console.log(`Is a symbolic link: ${stats.isSymbolicLink()}`);
});
