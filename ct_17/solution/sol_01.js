function solution(n) {
  let count = 0; // 3x 마을 "유효 숫자"를 몇 개 찾았는지
  let candidate = 0; // 현재 검사하는 숫자

  while (count < n) {
    candidate++;

    // if candidate is "저주의 숫자", skip
    if (candidate % 3 === 0 || String(candidate).includes("3")) {
      continue;
    }

    // 유효하면 count++
    count++;
  }

  return candidate; // n번째 유효 숫자
}

//15 => 25 15번째 유효숫자임
