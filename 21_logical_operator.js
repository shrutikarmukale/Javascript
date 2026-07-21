const prompt = require('prompt-sync')();
let age = Number(prompt("Enter your age:"));
let citizen = prompt("Are you a citizen? (yes/no):").toLowerCase();
if(age>=18 && citizen==="yes"){
    console.log("You are eligible to vote.");   
}
