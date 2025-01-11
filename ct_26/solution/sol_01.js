function solution(before, after) {
  // 1. before, after 각각 정렬
  const sortedBefore = [...before].sort().join("");
  const sortedAfter = [...after].sort().join("");

  // 2. 비교 후 결과 반환
  return sortedBefore === sortedAfter ? 1 : 0;
}
