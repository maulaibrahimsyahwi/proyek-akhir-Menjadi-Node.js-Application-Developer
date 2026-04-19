const fs = require("fs");
const path = require("path");

function readDirAndWriteFile() {
  const directoryPath = __dirname;
  const files = fs.readdirSync(directoryPath);

  const folders = files.filter((file) => {
    return fs.statSync(path.join(directoryPath, file)).isDirectory();
  });

  folders.sort();

  fs.writeFileSync(path.join(directoryPath, "out.txt"), folders.join(","));
}

readDirAndWriteFile();
