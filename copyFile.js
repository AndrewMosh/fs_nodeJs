const fs = require("fs");

fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) throw err;
  console.log("File copied");
});
