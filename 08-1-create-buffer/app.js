const unsafeBuffer = Buffer.allocUnsafe(100000);
unsafeBuffer[0] = 1;
const safeBuffer = Buffer.alloc(100000);
const stringBuffer = Buffer.from("Dicoding");
