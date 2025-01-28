function solution(dots) {
  let x = 0;
  let y = 0;
  /*for (let i of dots) {
    console.log(i);
    x = Math.abs(i[0] - x);
    console.log(x);
  }*/
  for (let k = 0; k < dots.length; k++) {
    x = Math.abs(dots[k][0] + dots[k + 1][0]);
    y = Math.abs(dots[k][1] + dots[k + 1][1]);
  }
  console.log(x);
  console.log(y);

  return x * y;
}

solution([
  [1, 1],
  [2, 1],
  [2, 2],
  [1, 2],
]);
/*solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);*/
