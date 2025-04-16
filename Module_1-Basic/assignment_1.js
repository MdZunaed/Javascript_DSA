let rl = require('readline-sync');

let numOne = parseFloat(rl.question('Enter number 1: '));
let numTwo = parseFloat(rl.question('Enter number 2: '));
let operator = rl.question('Enter operation(+,-,*,/): ');
let result;

if (isNaN(numOne) || isNaN(numTwo)) {
    console.log("Invalid number");
    return;
} else {
    if (operator == '+') {
        result = numOne + numTwo;
    } else if (operator == '-') {
        result = numOne - numTwo;
    } else if (operator == '*') {
        result = numOne * numTwo;
    } else if (operator == '/') {
        result = numOne / numTwo;
    } else {
        console.log("Invalid operator");
        return;
    }
    console.log(`${numOne} ${operator} ${numTwo} = ${result}`);
}
