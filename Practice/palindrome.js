

function isPalindrome(x) {
    let reverse;
    if (x < 0) {
        return false;
    } else {
        reverse = x.toString().split("").reverse().join("");
        console.log(reverse);
        return x == reverse;
    }
}

console.log(isPalindrome(12121));
console.log(isPalindrome(12345));