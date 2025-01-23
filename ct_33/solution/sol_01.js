function solution(sides) {
  const [x, y] = sides;
  const sum = x + y;
  const diff = Math.abs(x - y);

  // 가능한 z는 (diff, sum) 사이의 정수 개수
  // 즉 z in (diff, sum) => z > diff, z < sum
  // 개수 = (sum - 1) - (diff + 1) + 1 = sum - diff - 1
  return sum - diff - 1;
}
