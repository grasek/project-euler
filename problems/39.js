const calc = () => {
  const triangles = [];
  for (let i = 1; i < 501; i++) {
    for (let j = i; j < 501; j++) {
      for (let k = j; k < 501; k++) {
        if (i ** 2 + j ** 2 === k ** 2 && i + j + k < 1001) triangles.push(i + j + k);
      }
    }
  }

  function mostFrequent(arr) {
    return Object.entries(
      arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {})
    ).reduce((a, b) => (a[1] > b[1] ? a : b))[0];
  }
  return mostFrequent(triangles);
}