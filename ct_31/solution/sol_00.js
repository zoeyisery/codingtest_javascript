function solution(balls, share) {
  var answer = 0;
  if (balls === share) answer = 1;
  else
    answer = factorial(balls) / (factorial(balls - share) * factorial(share));
  console.log(answer);
  return answer;
}

function factorial(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
}

solution(3, 3);
