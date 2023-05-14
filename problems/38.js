const calc = () => {
  let result = [];
  function concat(num) {
    let result = [];
    for (let i = 1; i < 10; i++) {
      let product = num * i, digits = Array.from(String(product), Number);
      result.length + digits.length < 10 && !digits.includes(0) ? result.push(...digits) : undefined;
    }
    return [...new Set(result)].length === 9 ? result : false;
  }
  for (let i = 1; i < 10000; i++) {
    if (concat(i)) result.push(concat(i));
  }
  result = result.map((e) => parseInt(e.join(""))).sort((a, b) => b - a);
  return result[0];
};