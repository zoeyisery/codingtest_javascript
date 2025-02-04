function solution(n) {
  var answer = [];
  const primes = [2, 3, 5, 7];
  for (let i of primes) {
    while (n % i === 0) {
      if (!answer.includes(i)) answer.push(i);
      n /= i;
    }

    if (n / 1 === n) {
      if (!answer.includes(n)) answer.push(n);
      //if (!answer.includes(i)) answer.push(i);
    }
  }

  console.log(answer);
  return answer;
}

solution(12); // should return [2, 3]
solution(17); // should return [17]
