const {transpose} = require('./transpose');

const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));

  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }

  const newArray = transpose(letters);
  const verticalJoin = newArray.map(ls => ls.join(''));

  for (const l of verticalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  
  return false;
}

module.exports = wordSearch;
