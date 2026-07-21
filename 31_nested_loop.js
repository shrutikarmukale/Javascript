const prompt = require('prompt-sync')();
let rows=Number(prompt("Enter number of rows:"));
let cols=Number(prompt("Enter number of columns:"));
for(let i=1;i<=rows;i++){
    for(let j=1;j<=cols;j++){
        console.log("i="+i+" j="+j);
    }
}
