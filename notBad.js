// Not Bad
//
// Create a function called notBad that takes a single argument, a string.
// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
// For example:
//
//   notBad('This dinner is not that bad!'): 'This dinner is good!'
//   notBad('This movie is not so bad!'): 'This movie is good!'
//   notBad('This dinner is bad!'): 'This dinner is bad!'

function notBad(s) {
  // let arr = s.split(' ');
  if (s.indexOf('bad') > s.indexOf('not') && s.indexOf('bad') != -1 && s.indexOf('not') != -1) {
    return s.slice(0, s.indexOf('not')) + 'good' + s.slice(s.indexOf('bad') + 3);
  } else {
    return s;
  }

  // return arr.join(' ');
}

console.log(notBad('This dinner is not that bad!'));
console.log(notBad('This movie is not so bad!'));
console.log(notBad('This dinner is bad!'));
