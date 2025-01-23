function solution(emergency) {
  // 1. emergency 배열을 복사하여 내림차순으로 정렬한 배열 생성
  const sorted = [...emergency].sort((a, b) => b - a);
  // 예: emergency = [3, 76, 24]
  // sorted = [76, 24, 3]

  // 2. 각 요소가 정렬된 배열에서 몇 번째(순위)인지 찾아서 결과 배열 생성
  // (index는 0-based이므로, "순위"는 index+1)
  return emergency.map((value) => sorted.indexOf(value) + 1);
}
