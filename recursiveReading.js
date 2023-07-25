const fs = require("fs");
const path = require("path");

function readdirRecursive(directory) {
  fs.readdir(directory, { withFileTypes: true }, (err, files) => {
    if (err) throw err;
    files.forEach((file) => {
      const filePath = path.join(directory, file.name);
      if (file.isDirectory()) {
        readdirRecursive(filePath); // Рекурсивный вызов для каждой поддиректории
      } else {
        console.log(filePath);
      }
    });
  });
}

readdirRecursive("bitch");
