function solution(dots) {
  // x좌표 모음, y좌표 모음
  const xVals = dots.map((dot) => dot[0]);
  const yVals = dots.map((dot) => dot[1]);

  // x좌표 최솟값/최댓값
  const minX = Math.min(...xVals);
  const maxX = Math.max(...xVals);

  // y좌표 최솟값/최댓값
  const minY = Math.min(...yVals);
  const maxY = Math.max(...yVals);

  // 직사각형 넓이 = (maxX - minX) * (maxY - minY)
  return (maxX - minX) * (maxY - minY);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
/*solution([
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
]);*/
