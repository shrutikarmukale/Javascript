const prompt = require('prompt-sync')();
let name = prompt("Enter your name:");
for (let Letter of name) {
    console.log(Letter);
}