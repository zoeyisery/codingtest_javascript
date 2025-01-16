function factorialBigInt(num) {
  let result = 1n;
  for (let i = 1n; i <= num; i++) {
    result *= i;
  }
  return result;
}

function solution(balls, share) {
  // balls, share 를 BigInt로 변환
  const b = BigInt(balls);
  const s = BigInt(share);

  const numerator = factorialBigInt(b);
  const denominator = factorialBigInt(b - s) * factorialBigInt(s);
  const comb = numerator / denominator; // BigInt 나눗셈
  // 문제에서 return은 "정수"지만, JS에서 BigInt도 가능
  // 필요시 comb.toString() 으로 문자열 변환
  return Number(comb); // 만약 balls ≤ 30, 이 범위라면 Number로도 안전 (30! < 2^53 ? X 사실 30! ~ 2.65e32 > 2^53)
}
