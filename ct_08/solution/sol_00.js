/*function solution(n) {
  let answer = 0;
  if (n < 4) {
    console.log("answer =", answer);
    return answer;
  }
  for (let i = 4; i <= n; i++) {
    console.log("i =", i);
    if (i % 2 == 0) {
      answer++;
    } else if (i % 3 == 0) {
      answer++;
    }
    console.log("answer =", answer);
  }
  return answer;
}*/

function solution(n) {
  let answer = 0;
  if (n < 4) return answer;
  for (let i = 5; i <= n; i++) {
    console.log("i =", i);
    if (i % 2 == 0 || i % 3 == 0 || i % 5 == 0) {
      answer++;
    }
    console.log("answer =", answer);
  }
  answer++;
  return answer;
}

solution(10);

//못 풀었음
