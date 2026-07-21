const prompt = require('prompt-sync')();
let n = Number(prompt("Enter a number:"));
for(let i=2; i<=n; i+=2){
    console.log(i);
}
