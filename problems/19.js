const calc = () => {
  let century = [], result = 0;
  const monthsLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
	let days = [];
  const isLeap = (y) => {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0
      ? monthsLeap
      : months;
  };
  for (let y = 1900; y < 2001; ++y) century.push(isLeap(y));
  for (let i = 0; i < century.flat().reduce((a, b) => a + b); i += 7) days.push([1, 2, 3, 4, 5, 6, 7]);
  century = century.flat();
    days = days.flat();
    let kk = 0;
  for (let j = 0; j < century.length; ++j) {
    days[century[j] + kk] === 7 && century[j] + kk > 365 ? result++ : undefined;
      kk += century[j]
  }
  return result;
};
