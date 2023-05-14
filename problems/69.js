const calc = () => {
  let result = 0, output = 0, num = 1000000;
  function relativelyPrime(num) {
    let result = 0, arr = new Array(num).fill(false);
    arr[0] = true;
    for (let i = 2; i <= arr.length / 2; i++) {
      if (arr.length % i == 0) {
        for (let k = i; k < arr.length; k += i) {
          arr[k] = true;
        }
      }
    }
    for (let e of arr) {
      if (e == false) {
        result++;
      }
    }
    return num / result;
  }

  for (let i = 1; i <= num; i++) {
    if(relativelyPrime(i) > result){
        result = relativelyPrime(i)
        output = i
    } else{
        continue;
    }
  }
  return result, output;
}

console.log(calc());
