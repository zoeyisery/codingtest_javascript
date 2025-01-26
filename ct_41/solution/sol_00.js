function solution(a, b) {
  var answer = 0;
  let _a = a / gcd(a, b);
  let _b = b / gcd(a, b);
  if (_b % 2 === 0 || _b % 5 === 0) {
    answer = 1;
  } else {
    answer = 2;
  }
  console.log(answer);
  return answer;
}

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

solution(7, 20); // 1
solution(11, 22); // 1
solution(12, 21); // 2
solution(3, 10);
