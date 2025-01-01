function solution(lines) {
  // 좌표 오프셋 상수
  const OFFSET = 100;

  // 문제에서 -100 <= a < b <= 100 이므로, 배열 크기를 201로 준비 (인덱스 0~200)
  // 만약 넉넉히 202 등으로 해도 상관 없지만, 201이면 충분.
  const arr = Array(201).fill(0);

  // 1) 각 선분에 대해, arr에 카운트
  for (const [start, end] of lines) {
    // 실제 선분의 [start, end)는 (end - start) 길이
    // 인덱스로 변환: (start+OFFSET)부터 (end+OFFSET) 직전까지 +1
    for (let x = start; x < end; x++) {
      // x+OFFSET이 배열의 유효 인덱스 범위 안에 있다고 가정(-100~100)
      arr[x + OFFSET]++;
    }
  }

  // 2) 이제 arr[i]가 2 이상인 구간의 “개수”를 세면 됨.
  //    arr[i] >= 2면, (i-100) 좌표에서 (i+1-100) 좌표 구간이 2개 이상 겹침
  let answer = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    // i와 i+1 사이를 하나의 “단위 길이”로 본다.
    // 만약 arr[i] >= 2라면, [i, i+1) 구간에 2개 이상 선분이 겹침
    if (arr[i] >= 2) {
      answer++;
    }
  }

  return answer;
}
