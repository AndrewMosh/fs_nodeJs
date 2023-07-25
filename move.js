const fs = require("fs");
const path = require("path");

const sourcePath = path.join("old_directory", "file.txt");
const destinationPath = path.join("new_directory", "file.txt");

fs.rename(sourcePath, destinationPath, (err) => {
  if (err) throw err;
  console.log("File moved");
});
