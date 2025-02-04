function solution(n) {
  let answer = [];

  // 2부터 시작하여 n의 제곱근까지 반복하면서 소인수를 찾아냅니다.
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      // i가 n의 소인수라면
      answer.push(i); // answer 배열에 추가합니다.
      // n이 i로 더 이상 나누어떨어지지 않을 때까지 계속 나눕니다.
      while (n % i === 0) {
        n /= i;
      }
    }
  }

  // 위의 반복문을 모두 진행한 후 남은 n이 1보다 크다면, n은 소인수(또는 소수)입니다.
  if (n > 1) {
    answer.push(n);
  }

  // 오름차순 정렬 후 반환 (문제에서 오름차순으로 담으라고 했으므로)
  answer.sort((a, b) => a - b);
  return answer;
}
