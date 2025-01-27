function solution(score) {
  var answer = [];
  let avg = [];
  avg = score.map((v) => (v[0] + v[1]) / 2);
  avg.sort((a, b) => b - a);
  // console.log(avg);
  score.forEach((v) => {
    let rank = avg.indexOf((v[0] + v[1]) / 2) + 1;
    answer.push(rank);
  });
  return answer;
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
