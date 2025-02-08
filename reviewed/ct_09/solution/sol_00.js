function solution(cipher, code) {
  let answer = "";
  const ci = [...cipher];
  const len = ci.length / code;

  for (let i = 1; i <= len; i++) {
    answer += ci[i * code - 1];
  }

  return answer;
}

solution("dfjardstddetckdaccccdegk", 4);
solution("pfqallllabwaoclk", 2);
