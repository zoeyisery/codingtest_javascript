function solution(my_string) {
  var answer = 0;
  my_string = my_string
    .split(!isNaN(my_string) ? "" : /[a-zA-Z]/)
    .filter((el) => el !== "");
  console.log(my_string);

  for (let i of my_string) {
    answer += parseInt(i);
  }
  console.log(answer);
  return answer;
}

solution("aAb1B2cC34oOp"); // Expected output: 37
solution("1a2b3c4d123Z"); // Expected output: 133
solution("aAbbBgcCkkoO2e"); // Expected output: 38
