function solution(numlist, n) {
  var answer = [];
  let absObj = {};

  for (let i of numlist) {
    absObj[i] = Math.abs(n - i);
  }

  let sorted = Object.entries(absObj).sort((a, b) => {
    const distDiff = a[1] - b[1];
    if (distDiff !== 0) {
      return distDiff;
    } else {
      return +b[0] - +a[0];
    }
  });

  for (let [key, _dist] of sorted) {
    answer.push(Number(key));
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
