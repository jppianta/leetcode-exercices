/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
  if (words.length === 0) {
    return true
  }
  
  const orderDict = {};
  order.split('').forEach((letter, index) => orderDict[letter] = index);
  
  let past = words[0]
  
  for(let i=1; i<words.length; i++) {
    const current = words[i];
    for (let j=0; j < past.length; j++) {
      if (j === past.length) {
        break
      }
      if (j === current.length) {
        return false
      }
      if (orderDict[current[j]] > orderDict[past[j]]) {
        break;
      }
      if (orderDict[current[j]] === orderDict[past[j]]) {
        continue;
      }
      if (orderDict[current[j]] < orderDict[past[j]]) {
        return false;
      }
    }
    past = current
  }
  
  return true
};