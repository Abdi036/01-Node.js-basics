const fileSys = require("fs");
const http = require("http");

// //////////////////////////////////////////////
// Rading and Writing files

// // blocking or synchoronous way
// const readText = fileSys.readFileSync("./txt/file.txt", "utf-8");
// console.log(readText);

// const writeText = `This is a text written to a file for demonstration to a: ${readText}cl\n just an example to understand.`;
// fileSys.writeFileSync("./txt/file.txt", writeText);
// console.log("file written successfully.");

// Non-Blolcking or asynchronous way

// fileSys.readFile("./txt/file.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR🎇");
//   console.log(data);
//   fileSys.readFile("./txt/file1.txt", "utf-8", (err, data1) => {
//     if (err) return console.log("ERROR🎇");
//     console.log(data1);
//     fileSys.readFile("./txt/file2.txt", "utf-8", (err, data2) => {
//       if (err) return console.log("ERROR🎇");
//       console.log(data2);
//       fileSys.readFile("./txt/file3.txt", "utf-8", (err, data3) => {
//         if (err) return console.log("ERROR🎇");
//         console.log(data3);
//         fileSys.writeFile(
//           `./txt/final.txt`,
//           `${data1}\n${data2}\n${data3}`,
//           "utf-8",
//           (err) => {
//             console.log("your file has been written.");
//           }
//         );
//       });
//     });
//   });
// });

// console.log("Reading...");

// //////////////////////////////////////////////////////////////////
// Server

const server = http.createServer((req, res) => {
  res.end("Hello From Server Side!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listning to a request on port 8000...");
});
