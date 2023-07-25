const fs = require("fs");

fs.unlink("output.js", (err) => {
  if (err) throw err;
  console.log("Файл успешно удален!");
});
