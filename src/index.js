module.exports = function reverse (n) {
  const nString = n.toString();
  nStringReverse = nString.split('').reverse().join(''); 
    return parseInt(nStringReverse);
}
