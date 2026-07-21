const prompt = require('prompt-sync')();
let age = Number(prompt("Enter your age:"));
let hasliecense = prompt("Do you have a driving license? (yes/no):").toLowerCase();
if(age>=18){
    if(hasliecense==="yes"){
        console.log("you can drive")
    } else {
        console.log("Get license first")
    }
}