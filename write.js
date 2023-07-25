const fs = require("fs");

fs.writeFile("output.js", 'console.log("Hello World!")', (err, data) => {
  if (err) throw err;
  console.log("Файл успешно записан!");
});
