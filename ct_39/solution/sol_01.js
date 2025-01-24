function solution(numlist, n) {
  var answer = [];
  let absObj = {};

  // (1) 각 원소의 거리 계산
  for (let i of numlist) {
    absObj[i] = Math.abs(n - i);
  }

  // (2) Object.entries() => [ [키,값], ... ] 형식
  //     여기서 [키]는 "문자열" 형태
  let sorted = Object.entries(absObj).sort((a, b) => {
    const distDiff = a[1] - b[1]; // 거리 비교
    if (distDiff !== 0) {
      return distDiff; // 거리 작은 순
    } else {
      return +b[0] - +a[0]; // 거리 같으면 더 큰 수 먼저
    }
  });

  // (3) 정렬된 결과에서 key(원래숫자문자열)를 Number 변환
  for (let [key, _dist] of sorted) {
    answer.push(Number(key));
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6], 4);
