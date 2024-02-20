const fileSys = require("fs");

const readText = fileSys.readFileSync("./txt/file.txt", "utf-8");
console.log(readText);

const writeText = `This is a text written to a file for demonstration to a: ${readText}cl\n just an example to understand.`;
fileSys.writeFileSync("./txt/file.txt", writeText);
console.log("file written successfully.");
