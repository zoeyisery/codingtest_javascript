function solution(quiz) {
  let result = [];
  for (let expr of quiz) {
    const parts = expr.split(" ");

    const x = parseInt(parts[0]);
    const op = parts[1]; // "-"
    const y = parseInt(parts[2]); // "4"
    // parts[3]는 "="
    const z = parseInt(parts[4]); // "-3"

    // 실제 계산
    let isCorrect = false;
    if (op === "+") {
      isCorrect = x + y === z;
    } else if (op === "-") {
      isCorrect = x - y === z;
    }

    // 결과 배열에 추가
    result.push(isCorrect ? "O" : "X");
  }
  return result;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
