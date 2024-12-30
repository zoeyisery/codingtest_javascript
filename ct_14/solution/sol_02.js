function solution(dots) {
  // dots = [p1, p2, p3, p4]
  // p1 = dots[0], p2 = dots[1], 등등...

  // 기울기를 구하는 함수
  function slope([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1);
  }

  // 1) (p1, p2) vs (p3, p4)
  if (slope(dots[0], dots[1]) === slope(dots[2], dots[3])) return 1;
  // 2) (p1, p3) vs (p2, p4)
  if (slope(dots[0], dots[2]) === slope(dots[1], dots[3])) return 1;
  // 3) (p1, p4) vs (p2, p3)
  if (slope(dots[0], dots[3]) === slope(dots[1], dots[2])) return 1;

  // 세 가지 조합에서 모두 기울기가 다르면 0
  return 0;
}
