const { createReadable, createWritable } = require("./utils");

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

const readable = createReadable(alphabet);
const writable = createWritable();

readable.pipe(writable);
