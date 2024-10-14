const buffer = Buffer.from("Muhammad Sayuti Akbar", "utf-8");

console.log(buffer.toString("base64"));
console.log(buffer.toString("hex"));

const buffer64 = Buffer.from("TXVoYW1tYWQgU2F5dXRpIEFrYmFy", "base64");

console.log(buffer64.toString("utf-8"));