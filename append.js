const fs = require("fs");

fs.appendFile(
  "output.js",
  "function whore() { console.log('Hello World!'); }",
  (err) => {
    if (err) throw err;
    console.log("Файл успешно обновлен!");
  }
);
