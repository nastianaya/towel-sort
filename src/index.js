module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.flatMap((e, i) => i % 2 === 0 ? e : e.reverse())
}
