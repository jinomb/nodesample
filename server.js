const { names, ultimate } = require("./module1");
const animes = require("./module2");
const os = require("os");
const fs = require("fs");

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

*/

console.log(fs.readFileSync("./assets/text.txt").toString()); // I'm soooo fast

fs.writeFileSync("./assets/text.txt", "I'm actually faster");
