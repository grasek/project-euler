const calc = () => {
  let numbers = Array.from({ length: 1000000 }, (_, i) => ++i),
    digitsPower = [], ac = [], ds = [];

  digitsPower.push(
    numbers
      .map((element) => element.toString())
      .map((element) => element.split(""))
      .map((el) => el.map((e) => parseInt(e)))
      .map((ele) => ele.map((elem) => elem ** 5))
  );
  ac = digitsPower.map((e) => e.map((el) => el.reduce((a, b) => a + b)));
  let dd = ac.pop();
  for (let i = 10; i < numbers.length; i++) {
    if (dd[i] == numbers[i]) ds.push(numbers[i]);
  }
  return ds.reduce((a, b) => a + b);
};
