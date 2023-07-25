const fs = require("fs");

fs.mkdir("new folder", (err) => {
  if (err) throw err;
  console.log("Директория успешно создана!");
});
