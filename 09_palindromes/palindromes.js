const palindromes = function (str) {
    let strNew=str.replace(/[\W_\s]/gi,'').toLowerCase();
    let strPalin=str.split('').reverse().join('').replace(/[\W_\s]/gi,'').toLowerCase();
    return (strPalin==strNew);

};
// palindromes('ZZZZ car, a man, a maracaz.');
// palindromes('r3ace3car')
// Do not edit below this line
module.exports = palindromes;
