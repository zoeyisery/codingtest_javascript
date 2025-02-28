function solution(my_string) {
  const tokens = my_string.split(" ");

  let answer = Number(tokens[0]);

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    const num = Number(tokens[i + 1]);

    if (operator === "+") {
      answer += num;
    } else if (operator === "-") {
      answer -= num;
    }
  }

  return answer;
}
