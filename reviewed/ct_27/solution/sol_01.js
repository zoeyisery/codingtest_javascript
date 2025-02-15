function solution(array) {
  const count = {};

  for (const value of array) {
    if (!count[value]) {
      count[value] = 0;
    }
    count[value]++;
  }

  let maxCount = 0;
  for (const key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
    }
  }

  let maxCountNumbers = [];
  for (const key in count) {
    if (count[key] === maxCount) {
      maxCountNumbers.push(Number(key));
    }
  }

  if (maxCountNumbers.length > 1) {
    return -1;
  } else {
    return maxCountNumbers[0];
  }
}
