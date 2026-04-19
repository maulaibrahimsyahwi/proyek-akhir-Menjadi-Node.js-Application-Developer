const { spawn } = require('child_process');

function main(myEnvVar) {
  return spawn(process.execPath, ['run-me.js'], {
    env: { MY_ENV_VAR: myEnvVar }
  });
}

module.exports = main;
