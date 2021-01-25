// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = n.toString();
    let res = "";

    for(let char of str){
        res = char + res;
    }

    if(res[res.length - 1] === "-"){
        res.slice(res.length - 1);
        res = "-" + res;
    }

    return parseInt(res);
}

module.exports = reverseInt;

// function reverseInt(n){
//     let reversed = n.toString().split('').reverse().join('');
//
//     return parseInt(reversed) * Math.sign(n);
// }