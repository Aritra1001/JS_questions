/**
 * 
 * Write a function (already given in the starter code as 'main') to determine if a patient has a fever based on their body temperature.
 *  The temperature is given in Fahrenheit, and you need to convert it to Celsius to make the determination.
 * if your converted temperature variable is convertedCelsius, you can round it by using convertedCelsius.toFixed(1).
 */

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
 rl.question("Enter the temperatur in Fahrenheit: ", (tempF) => {
    let result = "", tempC = (tempF - 32) * 5 / 9;
    if(tempC >= 37){
        result = `You have a fever! Your temperature is ${tempC.toFixed(1)}`;
    }
    else{
        result = `No fever! Your temperature is ${tempC.toFixed(1)}`;
    }
    console.log(result);
 })