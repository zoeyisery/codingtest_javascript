function solution(array) {
  // 1. 등장 횟수 기록 객체(또는 배열) 생성
  const count = {};

  // 2. array를 순회하며 등장 횟수 카운트
  for (const value of array) {
    if (!count[value]) {
      count[value] = 0;
    }
    count[value]++;
  }

  // 3. 가장 많이 등장한 횟수(maxCount) 찾기
  //    그리고 그 횟수를 가진 숫자들 중 몇 개가 있는지 확인
  let maxCount = 0;
  for (const key in count) {
    if (count[key] > maxCount) {
      maxCount = count[key];
    }
  }

  // 4. maxCount를 가진 숫자가 몇 개인지 세고, 그 숫자가 무엇인지 알아냄
  let maxCountNumbers = [];
  for (const key in count) {
    if (count[key] === maxCount) {
      maxCountNumbers.push(Number(key)); // key는 문자열이므로 Number 변환
    }
  }

  // 5. 최빈값이 여러 개면 -1, 아니면 그 숫자 반환
  if (maxCountNumbers.length > 1) {
    return -1;
  } else {
    return maxCountNumbers[0];
  }
}
