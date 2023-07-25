const fs = require("fs");
const fileStream = fs.createReadStream("output.txt");
fileStream.on("data", (chunk) => {
  console.log("Received a chunk of data:", chunk);
});
fileStream.on("end", () => {
  console.log("Finished reading the file");
});
