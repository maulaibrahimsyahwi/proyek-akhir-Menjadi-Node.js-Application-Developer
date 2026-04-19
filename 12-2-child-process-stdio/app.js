const { spawn } = require("child_process");

function main(command, args) {
  return spawn(command, args, {
    stdio: ["ignore", "inherit", "pipe"],
  });
}

module.exports = main;
