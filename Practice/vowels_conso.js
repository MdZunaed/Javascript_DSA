process.stdin.resume();
process.stdin.setEncoding('utf-8');

let s = 'javascriptloops';

vowelsAndConsonants(s);

function vowelsAndConsonants(s) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            console.log(s[i]);
        }
    }
    for (let c of s) { // same as above loop
        if (!vowels.has(c)) {
            console.log(c);
        }
    }
}