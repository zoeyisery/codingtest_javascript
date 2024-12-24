function solution(n) {
  let answer = 0;

  // 소수를 찾는 함수
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 4; i <= n; i++) {
    if (!isPrime(i)) {
      answer++;
    }
  }

  return answer;
}
