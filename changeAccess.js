const fs = require("fs");

fs.chmod("file.txt", 0o755, (err) => {
  if (err) throw err;
  console.log("File permissions changed");
});
