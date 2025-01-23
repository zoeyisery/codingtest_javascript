function solution(cipher, code) {
  let answer = "";
  const ci = [...cipher];
  const len = ci.length / code;

  for (let i = 1; i <= len; i++) {
    console.log("code =", code);
    console.log("i =", i);
    answer += ci[i * code - 1];
    console.log("answer =", answer);
  }

  console.log("final answer =", answer);

  return answer;
}

solution("dfjardstddetckdaccccdegk", 4);
solution("pfqallllabwaoclk", 2);

/*
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}
*/
