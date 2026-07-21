const prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number:"));
for (let i = 1; i <= n; i++) {
    if (i ==3) 
    continue;
    console.log(i);
}