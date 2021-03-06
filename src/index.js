module.exports = function reverse (n) {
    let str = '' + n;
    let newN = str.split('').reverse();
    if (isNaN(+newN[newN.length-1])) {
        newN.pop();
        newN = +newN.join('');
    } else newN = +newN.join('');
    return newN;
}
