function solution(dots) {
  const [fstDots] = dots.splice(0, 1);

  for (let i = 0; i < dots.length; i++) {
    let dot = dots.slice(i, i + 1);
    let adot = dots.slice(i + 1, i + 3);

    dot.push(fstDots);

    if (slope(dot) === slope(adot)) return 1;
  }
  return 0;
}

function slope(array) {
  let x1 = array[0][0];
  let x2 = array[1][0];
  let y1 = array[0][1];
  let y2 = array[1][1];
  return (y2 - y1) / (x2 - x1);
}

console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
);

console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
);
