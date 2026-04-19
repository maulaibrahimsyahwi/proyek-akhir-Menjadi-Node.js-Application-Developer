const { Transform } = require("stream");

function createBase64TransformStream() {
  return new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString("base64"));
    },
  });
}
