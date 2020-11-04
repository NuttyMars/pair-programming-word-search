const transpose = function(matrix) {
 
  let newArray = [];

  for (let element of matrix[0]) {
    newArray.push([]);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {

      newArray[j].push(matrix[i][j]);
    
    }
  }
  return newArray;
};

module.exports = {transpose};