function solution(i, j, k) {
  var answer = 0;
  for (let n = i; n <= j; n++) {
    answer += (n + "").split("").filter((e) => e === k + "").length || 0;
  }
  console.log(answer);
  return answer;
}

solution(1, 13, 1);
