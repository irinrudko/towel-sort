
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix === 0) {
    return [];
  }

  const sortedArray = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      matrix[i].sort((a, b) => a - b);
    } else matrix[i].sort((a, b) => b - a);

    matrix[i].map((el) => sortedArray.push(el));
  }
  return sortedArray;
}
