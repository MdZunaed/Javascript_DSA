function isValid(s) {
    let stack = [];
    let pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (let char of s) {
        if (char in pairs) {
            if (stack.length === 0 || stack.pop() != pairs[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}

let test1 = "()";
let test2 = "(]";
let test3 = "[()]";
let test4 = "(){}[[";
let test5 = "(){}[]";

console.log(test1 + ' valid: ' + isValid(test1));
console.log(test2 + ' valid: ' + isValid(test2));
console.log(test3 + ' valid: ' + isValid(test3));
console.log(test4 + ' valid: ' + isValid(test4));
console.log(test5 + ' valid: ' + isValid(test5));