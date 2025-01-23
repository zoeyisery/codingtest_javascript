function solution(sides) {
  var answer = 0;
  let long = 0;
  let short = 0;
  if (sides[0] === sides[1]) {
    answer = 1;
    return answer;
  } else {
    long = Math.max(sides[0], sides[1]);
    short = Math.min(sides[0], sides[1]);
  }
  //console.log(long, short);
  for (let i = long + 1; i < long + short; i++) {
    answer++;
  }

  for (let k = long - short; k < long; k++) {
    answer++;
  }

  //console.log(answer);
  return answer;
}

console.log(solution([11, 7]));
console.log(solution([1, 2]));
console.log(solution([7, 7]));
