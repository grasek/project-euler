const calc = () => {
  const pentagonals = [];
  const pentagon = (num) => {
    num = (num * (3 * num - 1)) / 2;
    return num;
  }

  for (let i = 1; i < 3000; i++) pentagonals.push(pentagon(i));

  for (let k = 0; k < pentagonals.length; k++) {
    for (let j = 0; j < pentagonals.length; j++) {
      if (
        pentagonals.includes(pentagonals[k] + pentagonals[j]) &&
        pentagonals.includes(Math.abs(pentagonals[j] - pentagonals[k]))
      ) {
        return Math.abs(pentagonals[j] - pentagonals[k]);
      }
    }
  }
}
