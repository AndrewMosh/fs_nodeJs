const fs = require("fs");

fs.rename("stat.js", "stats.js", (err) => {
  if (err) throw err;
  console.log("File renamed");
});
