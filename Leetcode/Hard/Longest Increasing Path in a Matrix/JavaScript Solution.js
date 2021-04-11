/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
  const dp = {};
  let highest = 0;
  for (let i=0; i<matrix.length; i++) {
    for (let j=0; j<matrix[0].length; j++) {
      const res = pathRec(i, j, matrix, dp);
      highest = res > highest ? res : highest;
    } 
  }
  
  return highest
};
  
function pathRec(i, j, matrix, dp) {
  if (dp[[i, j]] !== undefined) {
    return dp[[i, j]]
  }
  
  let longestPath = 1;
  if (i + 1 < matrix.length && matrix[i + 1][j] > matrix[i][j]) {
    const optionPath = pathRec(i + 1, j, matrix, dp) + 1;
    longestPath = optionPath > longestPath ? optionPath : longestPath;
  }
  
  if (i - 1 >= 0 && matrix[i - 1][j] > matrix[i][j]) {
    const optionPath = pathRec(i - 1, j, matrix, dp) + 1;
    longestPath = optionPath > longestPath ? optionPath : longestPath;
  }
  
  if (j + 1 < matrix[0].length && matrix[i][j + 1] > matrix[i][j]) {
    const optionPath = pathRec(i, j + 1, matrix, dp) + 1;
    longestPath = optionPath > longestPath ? optionPath : longestPath;
  }
  
  if (j - 1 >= 0 && matrix[i][j - 1] > matrix[i][j]) {
    const optionPath = pathRec(i, j - 1, matrix, dp) + 1;
    longestPath = optionPath > longestPath ? optionPath : longestPath;
  }
  
  dp[[i, j]] = longestPath;
  
  return dp[[i, j]]
}