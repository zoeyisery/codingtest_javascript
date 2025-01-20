function solution(n, numlist) {
  var answer = [];
  for (num of numlist) {
    if (num % n === 0) answer.push(num);
  }
  return answer;
}

solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
