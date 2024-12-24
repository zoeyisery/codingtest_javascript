function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (i % j === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}
