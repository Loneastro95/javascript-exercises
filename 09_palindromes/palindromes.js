const palindromes = function (str) {
  let nopunctuation = str.replace(/\W/g,"");
  let nospaces = nopunctuation.replace(/\s/g,"");
  let finalstring = nospaces.toLowerCase();

  let len = finalstring.length;
  for ( let i = 0; i < Math.floor(len/2); i++ ) {
    if (finalstring[i] !== finalstring[len - 1 - i]) {
      return false;
    }
  }
  return true;    
}

// Do not edit below this line
module.exports = palindromes;
