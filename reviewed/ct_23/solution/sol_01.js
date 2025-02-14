function solution(quiz) {
  let result = [];
  for (let expr of quiz) {
    const parts = expr.split(" ");

    const x = parseInt(parts[0]);
    const op = parts[1]; // "-"
    const y = parseInt(parts[2]); // "4"

    const z = parseInt(parts[4]); // "-3"

    let isCorrect = false;
    if (op === "+") {
      isCorrect = x + y === z;
    } else if (op === "-") {
      isCorrect = x - y === z;
    }

    result.push(isCorrect ? "O" : "X");
  }
  return result;
}

solution(["3 - 4 = -3", "5 + 6 = 11"]);
