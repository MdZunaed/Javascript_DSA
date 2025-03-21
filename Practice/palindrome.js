

function isPalindrome(number) {
    while (number > 0) {
        let digit = number % 10; // Extract the last digit
        //console.log(digit); // Outputs: 5 4 3 2 1 (Reversed order)
        number = Math.floor(number / 10); // Remove the last digit
        if (number === digit) {
            return true;
        } else {
            return false;
        }
        //return false;
    }
}

console.log(isPalindrome(12121));