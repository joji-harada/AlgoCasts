// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    if(str === "") return true;

    let res = "";
    for(let char of str){
        res = char + res;
    }
    if(res === str){
        return true;
    } else if(res !== str){
        return false;
    }
}

module.exports = palindrome;


// function palindrome(str){
//     return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//     })
// }