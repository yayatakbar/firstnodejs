import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

input.question("siapa nama lu : ",function (nama){
    console.log("nama lu "+nama);
    input.close();
})