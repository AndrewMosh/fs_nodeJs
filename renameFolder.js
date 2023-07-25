const fs = require("fs");

fs.rename("old_directory", "new_directory", (err) => {
  if (err) throw err;
  console.log("Directory renamed");
});
