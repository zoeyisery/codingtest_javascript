/*function solution(dots) {
  const slopes = new Set();

  const slope = (p1, p2) => {
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    return (y2 - y1) / (x2 - x1);
  };

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const m = slope(dots[i], dots[j]); // 기울기 계산

      if (slopes.has(m)) {
        // 이미 이 기울기가 있었으면 => 평행선 존재
        return 1;
      } else {
        slopes.add(m);
      }
    }
  }

  return 0;
}*/

function solution(dots) {
  // 기울기 계산
  function slope([x1, y1], [x2, y2]) {
    return (y2 - y1) / (x2 - x1);
  }

  // 실수 비교를 위한 ε 범위 비교
  function isSameSlope(s1, s2, epsilon = 1e-9) {
    return Math.abs(s1 - s2) < epsilon;
  }

  // 1. 모든 선분(6개)을 구해 인덱스로 저장
  const lines = [];
  for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 4; j++) {
      lines.push([i, j]);
      // 예: [0,1], [0,2], [0,3], [1,2], [1,3], [2,3]
    }
  }

  // 2. 각 선분 쌍을 확인
  //   - 선분 A: (a1,a2), 선분 B: (b1,b2)
  //   - 두 선분이 점을 공유하지 않고, 기울기가 같으면 평행
  for (let i = 0; i < lines.length; i++) {
    for (let j = i + 1; j < lines.length; j++) {
      const [a1, a2] = lines[i];
      const [b1, b2] = lines[j];

      // 점 겹치지 않는지 체크
      // => 4개 인덱스가 모두 달라야 함
      const setOfPoints = new Set([a1, a2, b1, b2]);
      if (setOfPoints.size === 4) {
        // 4개 점이라면 (즉, 선분 2개가 완전히 다른 점)
        const s1 = slope(dots[a1], dots[a2]);
        const s2 = slope(dots[b1], dots[b2]);

        if (isSameSlope(s1, s2)) {
          return 1; // 평행 발견
        }
      }
    }
  }

  // 끝까지 못 찾으면 평행 없음
  return 0;
}

// 테스트
console.log(
  solution([
    [1, 4],
    [9, 2],
    [3, 8],
    [11, 6],
  ])
); // 1 (평행 존재)
console.log(
  solution([
    [3, 5],
    [4, 1],
    [2, 4],
    [5, 10],
  ])
); // 0 (평행 없음)
