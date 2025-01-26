function solution(a, b) {
  // 1) gcd로 기약분수 만들기
  const g = gcd(a, b);
  let _a = a / g;
  let _b = b / g;

  // 2) 분모에서 2, 5를 완전히 제거
  while (_b % 2 === 0) {
    _b /= 2;
  }
  while (_b % 5 === 0) {
    _b /= 5;
  }

  // 3) 1이면 유한소수, 아니면 무한소수
  return _b === 1 ? 1 : 2;
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
