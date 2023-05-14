const calc = () => {
  let nums = [], result = 0;
  let case1 = {
    0: 0,
    1: 3,
    2: 3,
    3: 5,
    4: 4,
    5: 4,
    6: 3,
    7: 5,
    8: 5,
    9: 4,
  };
  let case2 = {
    0: 0,
    1: 3,
    2: 6,
    3: 6,
    4: 5,
    5: 5,
    6: 5,
    7: 7,
    8: 6,
    9: 6,
  };

  for (let i = 1; i < 1001; i++) nums.push(i.toString());
  for (let j = 0; j < nums.length; j++) {
    switch (nums[j].length) {
      case 1:
        result += case1[nums[j]];
        break;
      case 2:
        if (nums[j].at(0) == "1") {
          if (
            nums[j].at(1) == "4" ||
            nums[j].at(1) == "6" ||
            nums[j].at(1) == "7" ||
            nums[j].at(1) == "9"
          ) {
            result += case1[nums[j].at(1)] + 4;
          } else {
            result += case1[nums[j].at(0)] + case1[nums[j].at(1)];
          }
        } else {
          result += case2[nums[j].at(0)] + case1[nums[j].at(1)];
        }
        break;
      case 3:
        if (nums[j].at(1) == 0 && nums[j].at(2) == 0) {
          result += case1[nums[j].at(0)] + 7;
        } else {
          result += case1[nums[j].at(0)] + 10;
          if (nums[j].at(1) == "1") {
            if (
              nums[j].at(2) == "4" ||
              nums[j].at(2) == "6" ||
              nums[j].at(2) == "7" ||
              nums[j].at(2) == "9"
            ) {
              result += case1[nums[j].at(1)] + 4;
            } else {
              result += case1[nums[j].at(0)] + case1[nums[j].at(1)];
            }
          } else {
            result += case2[nums[j].at(1)] + case1[nums[j].at(2)];
          }
        }
        break;
      case 4:
        result += 11;
    }
  }

  return result;
}

console.log(calc());
