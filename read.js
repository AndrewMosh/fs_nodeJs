const fs = require("fs");

fs.readFile("file.html", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
