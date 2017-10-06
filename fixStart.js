// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

function fixStart(s) {
  let firstChar = s.charAt(0);
  let regEx = new RegExp(firstChar, 'g');
  let replaced = firstChar + s.slice(1).replace(regEx, '*');
  return replaced;
}

console.log(fixStart('babble'));
