function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (!isPrime) {
      answer++;
    }
  }
  console.log(answer);
  return answer;
}

solution(10); // should return 4
solution(20); // should return 11
