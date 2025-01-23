function solution(common) {
  var answer = 0;
  const d = common[1] - common[0];
  const r = common[1] / common[0];

  if (common[2] - common[1] === d) {
    const last = common[common.length - 1];
    return last + d;
  } else {
    const last = common[common.length - 1];
    return last * r;
  }
}

console.log(solution([1, 2, 3, 4]));

console.log(solution([2, 4, 8]));
