function solution(n) {
  let fac = [];
  fac[0] = 1;
  for (let i = 1; i <= 10; i++) {
    fac[i] = fac[i - 1] * i;
  }

  let answer = 0;
  for (let i = 1; i <= 10; i++) {
    if (fac[i] <= n) {
      answer = i;
    } else {
      break;
    }
  }
  return answer;
}

solution(7);
