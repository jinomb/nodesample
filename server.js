const { names, ultimate } = require("./module1");
const animes = require("./module2");
const os    = require("os");
const fs    = require("fs");
const http  = require("http");
/*
console.log(names);
console.log(animes);
console.log(os.cpus());

fs.readFile("./assets/text.txt", (error, data) => {
    if (error) console.log(error);
    else console.log(data.toString());   
})

fs.writeFile("./assets/text.txt", "im so fast master", () => {
    console.log("done sir")
})

Aynschornous 

console.log(fs.readFileSync("./assets/text.txt").toString());

fs.writeFileSync("./assets/text.txt", "I'm actually faster");
*/

const HOSTNAME = "localhost";
const PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req);
    console.log(res);
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello from the Server!");
    res.end();
});

server.listen(PORT, HOSTNAME, () => {
    console.log(`SERVER STATER ON http://${HOSTNAME}:${PORT}`);
})