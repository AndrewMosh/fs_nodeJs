const fs = require("fs");

fs.rmdir("new folder", (err) => {
  if (err) throw err;
  console.log("Директория успешно удалена!");
});
