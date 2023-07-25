const fs = require("fs");
const path = require("path");

fs.mkdtemp(path.join("directory", "prefix-"), (err, folder) => {
  if (err) throw err;
  console.log("Temporary folder:", folder);
});
